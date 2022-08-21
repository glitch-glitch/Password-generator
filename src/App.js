import React from 'react';
import PG from './PG';
import UGCstaffadd from './components/UGCstaffadd'

export const App = () => {
  return (
 <div className="container">
  <div className="row">
    <div className="col-md-6">
        <UGCstaffadd />
     
    </div>
    <div className="col-md-6">
       <PG />
    </div>
  </div>
</div>
  )
}
export default App;