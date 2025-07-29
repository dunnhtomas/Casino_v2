#!/usr/bin/env node

/**
 * Documentation Coverage Validator
 * 
 * This script validates that all commands mentioned in README.md
 * exist in package.json scripts to ensure documentation accuracy.
 * 
 * PRD Phase 10 requirement: "docs-coverage: Validate that all 
 * commands in README.md exist in package.json scripts"
 */

const fs = require('fs');
const path = require('path');

const README_PATH = path.join(__dirname, '..', 'README.md');
const PACKAGE_JSON_PATH = path.join(__dirname, '..', 'package.json');

console.log('🔍 Documentation Coverage Validator');
console.log('=====================================\n');

// Read files
let readmeContent, packageJson;

try {
  readmeContent = fs.readFileSync(README_PATH, 'utf8');
  packageJson = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, 'utf8'));
} catch (error) {
  console.error('❌ Error reading files:', error.message);
  process.exit(1);
}

// Extract npm commands from README
const npmCommandRegex = /npm run ([\w:.-]+)/g;
const dockerComposeRegex = /docker-compose exec app npm run ([\w:.-]+)/g;

const readmeCommands = new Set();
let match;

// Extract npm run commands
while ((match = npmCommandRegex.exec(readmeContent)) !== null) {
  // Skip placeholder patterns
  if (match[1] === '...' || match[1] === 'docker:' || match[1].includes('*')) {
    continue;
  }
  readmeCommands.add(match[1]);
}

// Extract docker-compose exec commands
while ((match = dockerComposeRegex.exec(readmeContent)) !== null) {
  // Skip placeholder patterns
  if (match[1] === '...' || match[1] === 'docker:' || match[1].includes('*')) {
    continue;
  }
  readmeCommands.add(match[1]);
}

// Get available scripts from package.json
const availableScripts = new Set(Object.keys(packageJson.scripts || {}));

console.log(`📖 Found ${readmeCommands.size} npm commands in README.md`);
console.log(`📦 Found ${availableScripts.size} scripts in package.json\n`);

// Validate commands
const missingCommands = [];
const validCommands = [];

for (const command of readmeCommands) {
  if (availableScripts.has(command)) {
    validCommands.push(command);
  } else {
    missingCommands.push(command);
  }
}

// Report results
console.log('✅ Valid Commands:');
validCommands.sort().forEach(cmd => {
  console.log(`   npm run ${cmd}`);
});

if (missingCommands.length > 0) {
  console.log('\n❌ Missing Commands in package.json:');
  missingCommands.sort().forEach(cmd => {
    console.log(`   npm run ${cmd}`);
  });
  
  console.log(`\n💡 Add these ${missingCommands.length} missing scripts to package.json or update README.md\n`);
  process.exit(1);
} else {
  console.log(`\n🎉 All ${validCommands.length} README commands exist in package.json!`);
  console.log('✅ Documentation coverage validation passed\n');
  process.exit(0);
}
