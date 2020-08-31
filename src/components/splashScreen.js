import React from 'react';


class splashScreen extends Component {
    render() {
        return (
            //...
<LoadingScreen
loading={CircleToBlockLoading}
bgColor='blue'
spinnerColor='#9ee5f8'
textColor='#676767'
logoSrc={Logo}
text=''
> 

// ...
// here loadable content
// for example, async data
//<div>Loadable content</div>
</LoadingScreen>
    );
    }
}

export default splashScreen;