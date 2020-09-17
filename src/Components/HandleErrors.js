// Boilerplate from https://www.peterbe.com/plog/displaying-fetch-errors-in-react
import React from 'react';

function HandleErrors({ error }){
    if (!error) {
        return null;
    }

    return (
        <div className="alert">
            <h3>Error</h3>
            {error instanceof window.Response ? (
        <p>
            <b>{error.status}</b> on <b>{error.url}</b>
            <br />
            <small>{error.statusText}</small>
        </p>
        ) : (
          <h4>
            <code>{error.toString()} Probably an error on internet connection.</code>
          </h4>
        )}
      </div>
    )
}

export default HandleErrors;