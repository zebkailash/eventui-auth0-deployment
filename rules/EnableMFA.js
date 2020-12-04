function enableMFAForApp(user, context, callback) {
  context.multifactor = {
    provider: 'any',
    rememberBrowser: false
  };
  return callback(null, user, context);
}