#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');

const program = new Command();

// Package info
const packageJson = require('../package.json');

program
  .name('spec-kit-assistant')
  .description('AI-assisted specification development slash commands for Claude Code')
  .version(packageJson.version);

// Install command
program
  .command('install [directory]')
  .description('Install Spec Kit Assistant slash commands to .claude directory')
  .option('--force', 'Overwrite existing commands')
  .option('--project', 'Install to project .claude directory (default)')
  .option('--global', 'Install to global ~/.claude directory')
  .action(async (directory, options) => {
    try {
      await installCommands(directory, options);
    } catch (error) {
      console.error(chalk.red(`Installation failed: ${error.message}`));
      process.exit(1);
    }
  });

// Status command
program
  .command('status [directory]')
  .description('Check installation status of Spec Kit Assistant commands')
  .action(async (directory) => {
    try {
      await checkStatus(directory || process.cwd());
    } catch (error) {
      console.error(chalk.red(`Status check failed: ${error.message}`));
      process.exit(1);
    }
  });

// Uninstall command
program
  .command('uninstall [directory]')
  .description('Remove Spec Kit Assistant slash commands')
  .option('--project', 'Remove from project .claude directory (default)')
  .option('--global', 'Remove from global ~/.claude directory')
  .action(async (directory, options) => {
    try {
      await uninstallCommands(directory, options);
    } catch (error) {
      console.error(chalk.red(`Uninstall failed: ${error.message}`));
      process.exit(1);
    }
  });

// Update command
program
  .command('update [directory]')
  .description('Update existing Spec Kit Assistant slash commands')
  .action(async (directory) => {
    try {
      await updateCommands(directory || process.cwd());
    } catch (error) {
      console.error(chalk.red(`Update failed: ${error.message}`));
      process.exit(1);
    }
  });

async function installCommands(targetDir, options = {}) {
  const workingDir = targetDir || process.cwd();
  const isGlobal = options.global;
  
  // Determine installation directory
  const claudeDir = isGlobal 
    ? path.join(require('os').homedir(), '.claude', 'commands', 'spec-kit-assistant')
    : path.join(workingDir, '.claude', 'commands', 'spec-kit-assistant');

  console.log(chalk.blue(`🎯 Installing Spec Kit Assistant to: ${claudeDir}`));

  // Check if already installed
  if (await fs.pathExists(claudeDir) && !options.force) {
    const { overwrite } = await inquirer.prompt([{
      type: 'confirm',
      name: 'overwrite',
      message: 'Spec Kit Assistant is already installed. Overwrite?',
      default: false
    }]);
    
    if (!overwrite) {
      console.log(chalk.yellow('Installation cancelled.'));
      return;
    }
  }

  // Create .claude directory structure
  await fs.ensureDir(claudeDir);

  // Copy command files
  const commandsSourceDir = path.join(__dirname, '..', 'commands');
  const commandFiles = await fs.readdir(commandsSourceDir);

  let installedCount = 0;
  for (const file of commandFiles) {
    if (path.extname(file) === '.md') {
      const sourcePath = path.join(commandsSourceDir, file);
      const destPath = path.join(claudeDir, file);
      
      await fs.copy(sourcePath, destPath);
      installedCount++;
      console.log(chalk.green(`✅ Installed /${path.basename(file, '.md')}`));
    }
  }

  // Check for existing spec-kit installation
  await checkSpecKitCompatibility(workingDir);

  console.log(chalk.green(`\n🚀 Successfully installed ${installedCount} Spec Kit Assistant commands!`));
  console.log(chalk.cyan(`\nAvailable commands:`));
  console.log(chalk.white(`  /ska-start        - Initialize new specification workflow`));
  console.log(chalk.white(`  /ska-plan         - Transition to planning phase`));
  console.log(chalk.white(`  /ska-tasks        - Break down into actionable tasks`));
  console.log(chalk.white(`  /ska-analyze      - Perform quality analysis and validation`));
  console.log(chalk.white(`  /ska-resume       - Resume interrupted workflow`));
  console.log(chalk.white(`  /ska-export       - Export workflow artifacts`));
  
  console.log(chalk.yellow(`\n💡 Tip: Use these commands in Claude Code to enhance your spec-driven development workflow!`));
}

async function checkStatus(directory) {
  const claudeDir = path.join(directory, '.claude', 'commands', 'spec-kit-assistant');
  const globalClaudeDir = path.join(require('os').homedir(), '.claude', 'commands', 'spec-kit-assistant');

  console.log(chalk.blue('📊 Spec Kit Assistant Status\n'));

  // Check project installation
  const projectInstalled = await fs.pathExists(claudeDir);
  console.log(`Project (.claude/commands/spec-kit-assistant): ${projectInstalled ? chalk.green('✅ Installed') : chalk.red('❌ Not installed')}`);

  if (projectInstalled) {
    const files = await fs.readdir(claudeDir);
    const commandCount = files.filter(f => path.extname(f) === '.md').length;
    console.log(chalk.gray(`  └─ ${commandCount} commands available`));
  }

  // Check global installation
  const globalInstalled = await fs.pathExists(globalClaudeDir);
  console.log(`Global (~/.claude/commands/spec-kit-assistant): ${globalInstalled ? chalk.green('✅ Installed') : chalk.red('❌ Not installed')}`);

  if (globalInstalled) {
    const files = await fs.readdir(globalClaudeDir);
    const commandCount = files.filter(f => path.extname(f) === '.md').length;
    console.log(chalk.gray(`  └─ ${commandCount} commands available`));
  }

  // Check for spec-kit compatibility
  await checkSpecKitCompatibility(directory);
}

async function checkSpecKitCompatibility(directory) {
  const specifyDir = path.join(directory, '.specify');
  const specKitInstalled = await fs.pathExists(specifyDir);

  console.log(`\nSpec Kit Compatibility:`);
  if (specKitInstalled) {
    console.log(chalk.green('✅ GitHub Spec Kit detected - full compatibility mode'));
    
    // Check for constitution
    const constitutionPath = path.join(directory, 'memory', 'constitution.md');
    const hasConstitution = await fs.pathExists(constitutionPath);
    console.log(`  └─ Constitution: ${hasConstitution ? chalk.green('Found') : chalk.yellow('Not found')}`);
  } else {
    console.log(chalk.yellow('⚠️  GitHub Spec Kit not detected - standalone mode'));
    console.log(chalk.gray('  └─ Commands will work independently of spec-kit workflow'));
  }
}

async function uninstallCommands(targetDir, options = {}) {
  const workingDir = targetDir || process.cwd();
  const isGlobal = options.global;
  
  const claudeDir = isGlobal 
    ? path.join(require('os').homedir(), '.claude', 'commands', 'spec-kit-assistant')
    : path.join(workingDir, '.claude', 'commands', 'spec-kit-assistant');

  if (!await fs.pathExists(claudeDir)) {
    console.log(chalk.yellow('Spec Kit Assistant is not installed in the specified location.'));
    return;
  }

  const { confirm } = await inquirer.prompt([{
    type: 'confirm',
    name: 'confirm',
    message: `Remove Spec Kit Assistant from ${claudeDir}?`,
    default: false
  }]);

  if (!confirm) {
    console.log(chalk.yellow('Uninstall cancelled.'));
    return;
  }

  await fs.remove(claudeDir);
  console.log(chalk.green('🗑️  Successfully uninstalled Spec Kit Assistant commands.'));
}

async function updateCommands(directory) {
  console.log(chalk.blue('🔄 Updating Spec Kit Assistant commands...'));
  
  // Update is essentially a forced install
  await installCommands(directory, { force: true });
  
  console.log(chalk.green('✅ Update completed!'));
}

// Parse command line arguments
program.parse();

// If no command specified, show help
if (!process.argv.slice(2).length) {
  program.outputHelp();
}