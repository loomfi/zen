import {exec} from "child_process"
import * as fs from 'fs-extra'
import * as d_pkg_m from 'detect-package-manager'
const package_manager = await d_pkg_m.detect()

console.log("Xen Compiler v1")
console.log(`Your package manager is ${package_manager}`)

if (package_manager == 'pnpm') {
    console.log("I am currently building the base application.")
    const remove_dir = async() => {
        return fs.remove('build/', (error) => {
            if (error) return console.error(error)
        });
    }
    const build = async() => {
        console.log("[*] Currently Building")
        return await exec('pnpm run build')
    }
    const copy_folder = async() => {
        setTimeout(function() {
        setTimeout(function() {console.log("[*] Building done!")},4000)
        setTimeout(function() {console.log("[*] Moving addons folder.")},5000)
        setTimeout(function() {fs.copy('addons/','build/client/addons', {recursive: true})}, 5000)
        setTimeout(function() {    console.log("Everything is finished. 😌")    },6000)
        },5000)
    }
    const cl_list = [remove_dir,build,copy_folder]
    for (const command of cl_list) {
        await command()
    } 
}
if (package_manager == 'npm') {
    console.log("I am currently building the base application.")
    const remove_dir = async() => {
        return fs.remove('build/', (error) => {
            if (error) return console.error(error)
        });
    }
    const build = async() => {
        console.log("[*] Currently Building")
        return await exec('npm run build')
    }
    const copy_folder = async() => {
        setTimeout(function() {console.log("[*] Building done!")},4000)
        setTimeout(function() {console.log("[*] Moving addons folder.")},5000)
        setTimeout(function() {fs.copy('addons/','build/client/addons', {recursive: true})}, 5000)
    }
    console.log("Everything is finished. 😌")
    const cl_list = [remove_dir,build,copy_folder]
    for (const command of cl_list) {
        await command()
    } 
}