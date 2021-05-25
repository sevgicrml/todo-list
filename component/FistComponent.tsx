import React,{Component} from 'react';

import {View,Text,TouchableOpacity} from 'react-native';
 
/*interface FirstType {
    changeState:Element,
    name:string,
    year:number
}

const FirstComponent:React.FC <FirstType> = ({name,year,changeState}) => {
    return (
        <View>
            <TouchableOpacity onPress={changeState}>
                <Text>Değiştir</Text>
            </TouchableOpacity>
        </View>
    );
}

export default FirstComponent; */
interface IProps {
    changeState: Element
}

interface IState {
    address : string
}


class FirstComponent extends Component<IProps,IState> {

    constructor(props:IProps){
        super(props);
        this.state = {
            address : 'malazgirt'
        }
    }
    render() {
        const{changeState} = this.props;
        const{address} = this.state;
        return (
            <View>
                <Text>{address}</Text>
            <TouchableOpacity onPress={ () => {
                this.setState({
                    address : 'iskilip'
                });
                changeState();
            }
                }>
                <Text>Değiştir</Text>
            </TouchableOpacity>
        </View>
        );
    }

}

export default FirstComponent;