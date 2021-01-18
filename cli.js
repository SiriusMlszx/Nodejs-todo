#!/usr/bin/env node

const program = require('commander')
const api = require('./index.js')
const pkg = require('./package.json')

program
    .version(pkg.version)

program
    .command('start')
    .description('start the todo list')
    .action(() => {
        api.start()
    });

program
    .command('add')
    .description('Add a task')
    .action((...args) => {
        const words = args[1].args.join(' ')
        api.add(words).then(() => {
            console.log('添加成功')
        }, () => {
            console.log('添加失败')
        })
    });

program
    .command('clear')
    .description('Clear all tasks')
    .action(() => {
        api.clear().then(() => {
            console.log('清除成功')
        }, () => {
            console.log('清除失败')
        })
    });




program.parse(process.argv)