import { getWordsFromFile } from 'scripts/get-words';
import { completion } from 'scripts/shared';

async function main() {
  const prompt = await getWordsFromFile(2500);

  await completion(prompt, {
    max_tokens: 42
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
