import { Item } from "native-base";

const comSegStyle = {
    backgroundColor: '#fff',
    borderColor: '#D3D3D3',

    marginLeft: 5,
    borderRadius: 55,
    borderWidth: 1,
    justifyConten:'center',
    alignItems:'center',
    width:90,
    height:30,
};


export default {
    container: {
        backgroundColor: "#FFF"
    }
    ,
    selectedSeg: {
        button: {
            ...comSegStyle,
            backgroundColor: '#000',
            borderColor: '#000',
        },
        text: {
            color: '#fff',
     
        }
    },
    nonSelectedSeg: {
        button: {
            ...comSegStyle,
        },
        text: {
            color: '#D3D3D3',
  
        }
    }
};