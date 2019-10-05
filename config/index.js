/**
 * Webpack Config
 *
 * @author matthias kallenbach
 * @date summer 2019
 */

/**
 * @type {string}
 */
let env = `${process.env.ENV || 'dev'}`;
if(!['dev','prod'].includes(env))
    env = 'dev';

/**
 * ... add here some environments
 */
const configs = {
    dev : require('./development.js'),
    prod : require('./production.js')
};

const configData = new configs[env]();
console.log(configData);
module.exports = configData;