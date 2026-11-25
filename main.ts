function hasFlag(flag: string): boolean {
  return process.argv.slice(2).includes(flag);
}

function renderLine(shout: boolean): string {
  const line = 'Unstable';
  return shout ? line.toUpperCase() : line;
}

function showHelp(): void {
  process.stderr.write('Usage: node main.ts [--shout] [--help]\n');
}

function main(): void {
  if (hasFlag('--help')) {
    showHelp();
    process.exitCode = 0;
    return;
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();
