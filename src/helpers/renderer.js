import React from 'react'; 
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { renderRoutes } from 'react-router-config';
import Routes from '../client/routes';

export default (req, store) => {
    const content = renderToString(
        <Provider store={store}>
           <StaticRouter location={req.path} context={{}}>
               {renderRoutes(Routes)}
           </StaticRouter>
        </Provider>
    )
    
    return `
    <html>
        <head>
           <body>
              <div id="root">${content}</div>
              <script src="bundle.js"></script>
           </body>
        </head>
    </html>
    `
}