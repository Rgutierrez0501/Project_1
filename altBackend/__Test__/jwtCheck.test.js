//sets up API with Auth0 information to create protected links
const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-oyuwqj0t.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://p1-api',
  issuer: 'https://dev-oyuwqj0t.us.auth0.com/',
  algorithms: ['RS256']
  });
  
  //All HTTP methods require authorization token beyond this point
  app.use(jwtCheck);
  //app.use("/",router);