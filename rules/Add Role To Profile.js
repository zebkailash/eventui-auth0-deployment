function (user, context, callback) {
  // TODO: implement your rule
  var namespace = "https://myevents.tech";
  var assignedRoles = (context.authorization || {}).roles;
  var idTokenClaims = context.idToken || {};
  var accessTokenClaims = context.accessToken || {};

  // SHOULD APPEAR auto deploy setup done
  const permissions = {
    "Participant": ["event:view", "event:register", "account:deactivate"],
    "Organizer": ["event:create", "event:update",  "event:view", "event:delete"],
  };
  idTokenClaims[`${namespace}/roles`] = assignedRoles;
  accessTokenClaims[`${namespace}/roles`] = assignedRoles;

  // some changes to rule
  const defaultScopes = ["openid", "profile", "email"];
	const allScopes = defaultScopes.concat(permissions[assignedRoles[0]]);
  accessTokenClaims.scope = allScopes.join(" ");
  context.idToken = idTokenClaims;
  context.accessToken = accessTokenClaims;

  // changed using auth0-cli
  return callback(null, user, context);
}