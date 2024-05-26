// Higher Order Component (HOC) - A component (HOC) that renders another component
// The goal of HOC is to reuse code
// able to do Render hijacking
// Prop manipulation
// Abstract state

import React from 'react'
import ReactDOM from 'react-dom/client'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

// ==> this is the HOC component maker, it takes a component and returns the HOC component
const withAdminWarning = (WrappedComponent) => {
    // props here = {isAdmin: true, info: "These are the details" }
 return (props) => (
    <div>
         {props.isAdmin && <p>This is private informaiton ,please don't share</p>}
         {/* here we pass all props from the HOC component to the normal component via object spread operator */}
         <WrappedComponent {...props}/>
    </div>
 )
};

// ==> once we call it with the Info component we get a modified,enhanced version of the component which we called AdminInfo here
const AdminInfo = withAdminWarning(Info)

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
             {props.isAuthenticated ? (
                <WrappedComponent {...props} />
                ) : (
                    <p>Please Authenticate to view info.</p>
                    )}
        </div>
    )
}
const AuthInfo = requireAuthentication(Info)

// ReactDOM.createRoot(document.getElementById('app')).render(<AdminInfo isAdmin={true} info="These are the details" />)
ReactDOM.createRoot(document.getElementById('app')).render(<AuthInfo isAuthenticated={true} info="These are the details" />)
