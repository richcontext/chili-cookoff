const { parsed } = require('dotenv-safe').config();

export default function(config, env, helpers) {
  const { plugin } = helpers.getPluginsByName(config, 'DefinePlugin')[0];
  const envVars = Object.keys(parsed).reduce(addDotEnvKey, {});

  return Object.assign(plugin.definitions, envVars);
}

function addDotEnvKey(env, key) {
  const configValue = { [`process.env.${key}`]: JSON.stringify(parsed[key]) };

  return Object.assign(env, configValue);
}
