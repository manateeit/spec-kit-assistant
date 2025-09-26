# Testing Spec Kit Assistant Locally

## 🎯 Overview
This guide shows you how to test the Spec Kit Assistant package locally before publishing to NPM.

## 🔧 Setup Local Testing Environment

### 1. Link the Package Locally
```bash
# In the spec-kit-assistant directory
npm link

# This makes 'spec-kit-assistant' available globally on your system
```

### 2. Verify CLI Works
```bash
spec-kit-assistant --help
spec-kit-assistant --version
```

## 🧪 Testing the CLI Commands

### Test in a Clean Directory
```bash
# Create a test project
mkdir my-test-project
cd my-test-project

# Check status (should show not installed)
spec-kit-assistant status

# Install commands
spec-kit-assistant install

# Verify installation
spec-kit-assistant status
ls -la .claude/commands/spec-kit-assistant/
```

### Test All CLI Features
```bash
# Install commands
spec-kit-assistant install

# Check what was installed
spec-kit-assistant status

# Update commands (reinstall)
spec-kit-assistant update

# Uninstall
spec-kit-assistant uninstall

# Install globally
spec-kit-assistant install --global
```

## 💬 Testing Slash Commands in Claude Code

### 1. Install Commands in Your Project
```bash
# In your project directory
spec-kit-assistant install
```

### 2. Available Commands to Test
Once installed, test these commands in Claude Code:

#### `/ska-start` - Initialize Workflow
```
/ska-start web-app
```
**Expected**: AI assistant introduces Spec Kit methodology and asks for your project concept

#### `/ska-plan` - Technical Planning  
```
/ska-plan architecture
```
**Expected**: AI guides you through technical architecture decisions

#### `/ska-tasks` - Task Breakdown
```
/ska-tasks moderate
```
**Expected**: AI breaks down your plan into actionable development tasks

#### `/ska-analyze` - Quality Analysis
```
/ska-analyze completeness
```
**Expected**: AI performs quality assessment on your specifications

#### `/ska-resume` - Resume Workflow
```
/ska-resume specification
```
**Expected**: AI helps you continue from any phase

#### `/ska-export` - Export Artifacts
```
/ska-export markdown
```
**Expected**: AI exports your work to various formats

## 🔍 What to Test

### 1. Command Installation
- [ ] CLI installs without errors
- [ ] All 6 command files are created in `.claude/commands/spec-kit-assistant/`
- [ ] Commands have proper frontmatter and content
- [ ] Status command shows correct information

### 2. Claude Code Integration  
- [ ] Commands appear in Claude Code's `/help`
- [ ] Each command loads and shows the proper introduction
- [ ] Commands accept arguments (e.g., `/ska-start web-app`)
- [ ] AI follows the structured methodology in each command

### 3. Workflow Testing
- [ ] `/ska-start` → guides specification development
- [ ] `/ska-plan` → develops technical architecture  
- [ ] `/ska-tasks` → breaks down into actionable items
- [ ] `/ska-analyze` → validates quality and completeness
- [ ] `/ska-resume` → can pick up from any phase
- [ ] `/ska-export` → creates professional outputs

### 4. GitHub Spec Kit Integration
- [ ] Works in projects without spec-kit (standalone mode)
- [ ] Detects existing `.specify/` directories  
- [ ] Preserves spec-kit workflow compatibility

## 🐛 Troubleshooting

### Command Not Found
```bash
# Re-link if needed
npm unlink && npm link

# Check global packages
npm list -g --depth=0 | grep spec-kit-assistant
```

### Commands Not Showing in Claude Code
1. Restart Claude Code after installation
2. Check file permissions: `ls -la .claude/commands/spec-kit-assistant/`  
3. Verify command files have proper frontmatter

### Installation Fails
```bash
# Force installation (overwrites existing)
spec-kit-assistant install --force

# Check directory permissions
ls -la .claude/
```

## 📝 Example Test Session

### Complete Workflow Test
```bash
# 1. Set up test project
mkdir test-webapp && cd test-webapp
spec-kit-assistant install

# 2. In Claude Code, run:
/ska-start web-app
# → Follow AI guidance to create specification

/ska-plan architecture  
# → Develop technical plan

/ska-tasks moderate
# → Break down into tasks

/ska-analyze completeness
# → Validate quality

/ska-export markdown
# → Export all artifacts
```

### Expected Results
- AI guides you through systematic specification development
- Each phase builds on the previous one
- Professional outputs ready for implementation
- Quality scores >85% in analysis phase

## 🎯 Success Criteria

Your local testing is successful if:

✅ CLI installs and runs without errors  
✅ All 6 slash commands are created and functional  
✅ Commands work properly in Claude Code  
✅ AI follows the 4-phase methodology correctly  
✅ Exports create professional documentation  
✅ Integration with existing projects works smoothly  

## 🚀 Ready for Production

Once local testing passes all criteria:
1. Commit final changes: `git add . && git commit -m "Final testing complete"`
2. Push to GitHub: `git push`
3. Publish to NPM: `npm publish`

Users can then install with: `npx spec-kit-assistant install`