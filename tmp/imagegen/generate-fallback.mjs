import fs from 'node:fs';
import path from 'node:path';

const lines = fs
  .readFileSync('tmp/imagegen/jobs.jsonl', 'utf8')
  .split(/\n/)
  .map((line) => line.trim())
  .filter(Boolean);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function downloadWithRetries(url, output, attempts = 5) {
  let lastError;
  for (let i = 1; i <= attempts; i += 1) {
    const response = await fetch(url);
    if (response.ok) {
      const buffer = Buffer.from(await response.arrayBuffer());
      fs.mkdirSync(path.dirname(output), { recursive: true });
      fs.writeFileSync(output, buffer);
      return;
    }
    lastError = new Error(`Generation failed (${response.status}) for ${output} [attempt ${i}]`);
    await sleep(1500 * i);
  }
  throw lastError;
}

for (const line of lines) {
  const job = JSON.parse(line);
  const query = new URLSearchParams({
    width: String(job.width),
    height: String(job.height),
    nologo: 'true',
    model: 'flux',
    seed: '11'
  });

  const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(job.prompt)}?${query.toString()}`;
  await downloadWithRetries(url, job.output);
  console.log(`Generated ${job.output}`);
}
