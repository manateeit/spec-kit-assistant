#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

async function validateCommands() {
  const commandsDir = path.join(__dirname, '..', 'commands');
  
  if (!await fs.pathExists(commandsDir)) {
    console.error('❌ Commands directory not found');
    process.exit(1);
  }

  const files = await fs.readdir(commandsDir);
  const commandFiles = files.filter(f => path.extname(f) === '.md');

  if (commandFiles.length === 0) {
    console.error('❌ No command files found');
    process.exit(1);
  }

  console.log(`🔍 Validating ${commandFiles.length} command files...`);

  let hasErrors = false;

  for (const file of commandFiles) {
    const filePath = path.join(commandsDir, file);
    const content = await fs.readFile(filePath, 'utf8');
    
    // Check for required frontmatter
    if (!content.startsWith('---')) {
      console.error(`❌ ${file}: Missing frontmatter`);
      hasErrors = true;
      continue;
    }

    // Check for description in frontmatter
    if (!content.includes('description:')) {
      console.error(`❌ ${file}: Missing description in frontmatter`);
      hasErrors = true;
    }

    // Check for reasonable content length
    if (content.length < 500) {
      console.log(`⚠️  ${file}: Content seems short (${content.length} chars)`);
    }

    // Check for Spec Kit Assistant branding
    if (!content.includes('Spec Kit Assistant')) {
      console.log(`⚠️  ${file}: Missing Spec Kit Assistant branding`);
    }

    console.log(`✅ ${file}: Valid`);
  }

  if (hasErrors) {
    console.error('\n❌ Command validation failed');
    process.exit(1);
  }

  console.log(`\n✅ All ${commandFiles.length} commands validated successfully`);
}

validateCommands().catch(error => {
  console.error(`Validation failed: ${error.message}`);
  process.exit(1);
});