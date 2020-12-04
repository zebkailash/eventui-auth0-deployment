/**
 * @description Rule will enable MFA for Application
 * @param {*} user
 * @param {*} context
 * @param {*} callback
 */
function enableMFAForApp(user, context, callback) {
  // add logic for enabling MFA for specif app.
  context.multifactor = {
    provider: 'any',
    rememberBrowser: false
  };
  return callback(null, user, context);
}