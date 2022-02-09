export async function main(args = process.argv.slice(2)): Promise<void> {
  console.log(`Hello, ${args[0] || 'World'}!`);
}
