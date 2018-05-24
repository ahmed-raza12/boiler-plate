import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import DriverForm1 from '../component/Driver1';
import DriverForm2 from '../component/Driver2';




const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};

class VechicalTabs extends React.Component {

    constructor(props) {
        super(props);
        this.onActive = this.onActive.bind(this);
        this.getDefaultActiveTab = this.getDefaultActiveTab.bind(this);

        this.tabIndices = {
            '#firsttab': 0,
            '#secondtab': 1
        };



    }
    onActive = (tab) => {
        console.log('sdsdsd', tab)
        const tabName = tab.props.label.toLowerCase();
        this.props.history.replace(`#${tabName}`);
    }
    getDefaultActiveTab() {
        const hash = this.props.location.hash;
        console.log(this.tabIndices[hash], '=2=2=2=2=2=2=2=2=2=2=2=2=2')
        return this.tabIndices[hash];
    }
    render() {
        return (
            <Tabs
            // initialSelectedIndex={this.getDefaultActiveTab()}
            >
                <Tab
                    label="Driver #1"
                    onActive={this.onActive}
                >
                    <DriverForm1 changeTab={this.onActive} />
                </Tab>
                <Tab
                    label="Driver #2"
                    onActive={this.onActive}
                >
                // ...
                </Tab>
            </Tabs>
        );
    }
}

export default VechicalTabs;