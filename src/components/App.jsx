import React from "react"
import { Profile } from "./Profile/Profile.js"
import user from "./Profile/user.json"
import data from "./Statistics/data.json"
import { Statistic } from "./Statistics/Statistics.js"


export const App = () => {
  return (
    <div>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
        stats={user.stats} />
      <Statistic title="Upload stats" stats={data} />
      
    </div>
  )
}




// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
