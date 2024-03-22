import { View, TouchableOpacity, Image, ScrollView, StyleSheet, FlatList, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import { Text, Card } from '../../../utils/theme'
import DarkMode from '../../../utils/darkmode.context';
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
import data from '../../../constants/data';
import { Dropdown } from 'react-native-element-dropdown';
import Dialog from "react-native-dialog";
import DatePicker from 'react-native-date-picker'
import { useNavigation } from '@react-navigation/native';



export default function ReservationScreen({}) {
    // const { isDarkMode } = useContext(DarkMode);
    const [currentSrenn, setCurrentSrenn] = useState("premier")
    const [name, setName] = useState("")
    const [Prenom, SetPrenom] = useState("")
    const [numCNI, setNumCNI] = useState("")
    const [telephone, setTelephone] = useState("")
    const [valueDepart, setValueDepart] = useState("");
    const [valueDestination, setValueDestination] = useState("");
    const [valueHoraire, setValueHoraire] = useState("")
    const [valueStatus, setValueStatus] = useState("");
    
  return (
   <Card 
    style={{
        flex: 1,
        }}>
     <View 
        style={{
        }}
        >
            {/* Title reservations */}
      {/* <Text style={{position: "absolute"}}>Reservations</Text> */}
      
        {/* formulaire reservation */}
            {currentSrenn === "premier" && <Ecran1 setCurrentSrenn={setCurrentSrenn} 
            valueDepart={valueDepart} setValueDepart={setValueDepart} valueDestination={valueDestination} 
            setValueDestination={setValueDestination} valueHoraire={valueHoraire} setValueHoraire={setValueHoraire}
            valueStatus={valueStatus} setValueStatus={setValueStatus}
            />}
            {currentSrenn === "deuxieme" && <Ecran2 name={name} setName={setName}
             Prenom={Prenom} SetPrenom={SetPrenom} 
             numCNI={numCNI} setNumCNI={setNumCNI} 
             telephone={telephone} setTelephone={setTelephone} />}
            {currentSrenn === "Troisieme" && <Ecran3 
             />}
            {currentSrenn === "Siege" && <Sierge />}
      {/* buttonde next & soumission */}
      <View>

      </View>
    </View>
   </Card>
  )
}

// ecran 1
const Ecran1 = ({ setCurrentSrenn, valueDepart, setValueDepart, valueDestination, setValueDestination, valueHoraire, setValueHoraire, valueStatus, setValueStatus }) => { 

const navigation = useNavigation()
const {isDarkMode} = useContext(DarkMode)
const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);
   const [displaySierge, setDisplaySierge] = useState(false)
    // const [valueHoraire, setValueHoraire] = useState("")
    const [itemsHoraire, setItemsHoraire] = useState([])
    const [IsFocusHoraire, setIsFocusHoraire] = useState(false);  

    const [IsFocusDestination, setIsFocusDestination] = useState(false);
    // const [valueDestination, setValueDestination] = useState("");
    const [itemsDestination, setItemsDestination] = useState([])

    const [IsFocusDepart, setIsFocusDepart] = useState(false);
    //const [valueDepart, setValueDepart] = useState("");
    const [itemsDepart, setItemsDepart] = useState([]);

    const [IsFocusStatus, setIsFocusStatus] = useState(false);
    // const [valueStatus, setValueStatus] = useState("");
    const [itemsStatus, setItemsStatus] = useState([]);

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const fillDropdownItems = () => {
        const destinations = data.agenceVoyage[0].destination; 
        const dropdownItems = destinations.map(destination => ({
            label: destination,
            value: destination
        }));
        setItemsDestination(dropdownItems);

        const departs = data.agenceVoyage[0].depart; 
        const dropdownItemsDepart = departs.map(depart => ({
            label: depart,
            value: depart
        }));
        setItemsDepart(dropdownItemsDepart);

        const horaires = data.agenceVoyage[0].horaire; 
        const dropdownItemsHoraire = horaires.map(horaire => ({
            label: horaire,
            value: horaire
        }));
        setItemsHoraire(dropdownItemsHoraire);

        const statuts = data.agenceVoyage[0].status; 
        const dropdownItemsStatuts = statuts.map(status => ({
            label: status,
            value: status
        }));
        setItemsStatus(dropdownItemsStatuts);
      
    };

    // Appelez fillDropdownItems une fois que le composant est monté
    useState(() => {
        fillDropdownItems();
    }, []);


    // const [selectedSeats, setSelectedSeats] = useState([]);

    // const handleSeatPress = (seatNumber) => {
    //   if (selectedSeats.includes(seatNumber)) {
    //     setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    //   } else if (selectedSeats.length < 15) {
    //     setSelectedSeats([...selectedSeats, seatNumber]);
    //   }
    // };

    const SiergeModal = () => {
        
        let selected = []
        const [row1, setRow1] = useState([
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: false, selected: false},
            {empty: true, selected: false},
            {empty: false, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: false, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: false, selected: false},
            {empty: true, selected: false},
            {empty: false, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: false, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: false, selected: false},
        ])
        const [row2, setRow2] = useState([
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: false, selected: false},
            {empty: true, selected: false},
            {empty: false, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: false, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: false, selected: false},
            {empty: true, selected: false},
            {empty: false, selected: false},
        ])
        const [row3, setRow3] = useState([
            {empty: true, selected: false},
            {empty: false, selected: false},
            {empty: true, selected: false},
            {empty: false, selected: false},
            {empty: true, selected: false},
            {empty: true, selected: false},
            {empty: false, selected: false},
            {empty: true, selected: false},
        ])
     const onSlectRow1 = (index) => {
        let tempRow = [];
        tempRow = row1;
        tempRow.map((item, ind) => {
            if(index == ind) {
                if(item.selected == true){
                    item.selected = false;
                    item.empty = true;
                } else {
                    item.selected = true;
                    item.empty = false;
                }
            }
        })
        let tempSeats=[];
        tempRow.map(item => {
            tempSeats.push(item);
        });
        setRow1(tempSeats); 
        setSelectedSeatNumber(index + 1);
     }

     const onSlectRow2 = (index) => {
        let tempRow = [];
        tempRow = row2;
        tempRow.map((item, ind) => {
            if(index == ind) {
                if(item.selected == true){
                    item.selected = false;
                    item.empty = true;
                } else {
                    item.selected = true;
                    item.empty = false;
                }
            }
        })
        let tempSeats=[];
        tempRow.map(item => {
            tempSeats.push(item);
        });
        setRow2(tempSeats); 
        setSelectedSeatNumber(index + 1);
     }

     const onSlectRow3 = (index) => {
        let tempRow = [];
        tempRow = row3;
        tempRow.map((item, ind) => {
            if(index == ind) {
                if(item.selected == true){
                    item.selected = false;
                    item.empty = true;
                } else {
                    item.selected = true;
                    item.empty = false;
                }
            }
        })
        let tempSeats=[];
        tempRow.map(item => {
            tempSeats.push(item);
        });
        setRow3(tempSeats); 
        setSelectedSeatNumber(index + 1);
     }
       
        return(
            <Dialog.Container useNativeDriver={true} visible={displaySierge}>
                <ScrollView >
                    <Card isDarkMode={isDarkMode} style={{
                        width: wp(80), height: hp("86%")
                    }}>
                        <Image style={{width: 40, height: 40}} source={require("../../../assets/images/volant.png")} />
                        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center",}}>
                            <View>
                                <FlatList 
                                    data={row1}
                                    numColumns={3}
                                    renderItem={({item, index}) => {
                                        return(
                                            <TouchableOpacity style={{margin: 7}} onPress={() => {
                                                if(item.selected==false && item.empty==false){
                                                    alert("sierge deja selectioné")
                                                } else {
                                                onSlectRow1(index)
                                            }}}>
                                                {
                                                    item.empty==false && item.selected==true?
                                                    (<Image style={{width: 26, height: 26, tintColor: "green"}} source={require("../../../assets/images/sierge.png")} />
                                                    ):item.empty==true && selected==false ?(<Image style={{width: 25, height: 25, }} source={require("../../../assets/images/sierge.png")} /> 
                                                    ):item.empty==false && item.selected==false?(<Image style={{width: 25, height: 25, tintColor: "grey"}} source={require("../../../assets/images/sierge.png")} />
                                                    ):null
                                                }
                                            </TouchableOpacity>
                                        )
                                    }}                                />
                            </View>
                            <View style={{}}>
                                <FlatList 
                                    data={row2}
                                    numColumns={2}
                                    renderItem={({item, index}) => {
                                        return(
                                            <TouchableOpacity style={{margin: 7,}} onPress={() => {
                                                if(item.selected==false && item.empty==false){
                                                    alert("sierge deja selectioné")
                                                } else {
                                                onSlectRow2(index)
                                            }}}>
                                                {
                                                    item.empty==false && item.selected==true?
                                                    (<Image style={{width: 26, height: 26, tintColor: "green"}} source={require("../../../assets/images/sierge.png")} />
                                                    ):item.empty==true && selected==false ?(<Image style={{width: 25, height: 25, }} source={require("../../../assets/images/sierge.png")} /> 
                                                    ):item.empty==false && item.selected==false?(<Image style={{width: 25, height: 25, tintColor: "grey"}} source={require("../../../assets/images/sierge.png")} />
                                                    ):null
                                                }
                                            </TouchableOpacity>
                                        )
                                    }}                                />
                            </View>
                        </View>
                        <View style={{width: "100%", justifyContent: "center", alignItems: "center"}}>
                                <FlatList 
                                    data={row3}
                                    horizontal
                                    renderItem={({item, index}) => {
                                        return(
                                            <TouchableOpacity style={{margin: 5,}} onPress={() => {
                                                if(item.selected==false && item.empty==false){
                                                    alert("sierge deja selectioné")
                                                } else {
                                                onSlectRow3(index)
                                            }}}>
                                                {
                                                    item.empty==false && item.selected==true?
                                                    (<Image style={{width: 26, height: 26, tintColor: "green"}} source={require("../../../assets/images/sierge.png")} />
                                                    ):item.empty==true && selected==false ?(<Image style={{width: 25, height: 25, }} source={require("../../../assets/images/sierge.png")} /> 
                                                    ):item.empty==false && item.selected==false?(<Image style={{width: 25, height: 25, tintColor: "grey"}} source={require("../../../assets/images/sierge.png")} />
                                                    ):null
                                                }
                                            </TouchableOpacity>
                                        )
                                    }}                                />
                            </View>
                        



                        <Dialog.Button label="Annuler" style={{display: "flex", justifyContent: "flex-end", alignItems: "flex-end"}} onPress={() => setDisplaySierge(false)} />
                    </Card>
                </ScrollView>
        </Dialog.Container>
    
        )
    }
   
    return(
        <>
        <ScrollView>
            
            <Card isDarkMode={isDarkMode}>

                <Image 
                    source={require("../../../assets/images/2.jpg")}
                    style={{ height: hp(35), borderBottomRightRadius: 22}}
                />
                <View
                    style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between", 
                    alignItems: "center",
                    paddingHorizontal: 14,
                    marginTop: 18,
                    position: "absolute",
                    }}>
            <TouchableOpacity 
                onPress={() => navigation.goBack()}
                style={{width: 35, height: 35, backgroundColor: "#2319194f", borderRadius: 8}}
            >
                <Icon style={{left: 2, top: 2}} name="chevron-back" size={28} color={isDarkMode ? 'white' : '#02b875'}/>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => {}}
            style={{width: 35, height: 35, backgroundColor: "#2319194f", borderRadius: 8, left: wp(73)}}>
                <Icon style={{left: 4, top: 2}} name="bookmarks" size={28} color={isDarkMode ? 'white' : '#02b875'}/>
            </TouchableOpacity>
                </View>
                <Card isDarkMode={isDarkMode} style={{
                        marginHorizontal: 8,
                        //backgroundColor: "#ccc",
                        bottom: 120,
                        borderRadius: 12
                    }}>
                
                    <View style={{flexDirection: "row"}}>
                        <Icon name="pin" size={24} color={isDarkMode ? "white" : "#02b875"}style={{top: 32, marginLeft: 4}} />
                        <View style={{
                        margin: 6,
                        }}>
                                <Text isDarkMode={isDarkMode}>Ville Départ de : </Text>
                                <Dropdown
                                style={[styles.dropdown, IsFocusDepart && {borderColor: isDarkMode ? "white" : "black" }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                //iconStyle={styles.iconStyle}
                                data={itemsDepart}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!IsFocusDepart ? 'Selectioner votre Ville actuelle' : '...'}
                                searchPlaceholder="Search..."
                                value={valueDepart}
                                onFocus={() => setIsFocusDepart(true)}
                                onBlur={() => setIsFocusDepart(false)}
                                onChange={item => {
                                    setValueDepart(item.valueDepart);
                                    setIsFocusDepart(false);
                                }}
                            />
                        </View>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Icon name="location" size={24} color={isDarkMode ? "white" : "#02b875"}style={{top: 32, marginLeft: 8}} />
                        <View style={{
                            // flex: 1,
                            // alignItems: 'center',
                            // justifyContent: 'center',
                            margin: 6
                            
                            }}>
                                <Text isDarkMode={isDarkMode}>Ville Arrivé : </Text>
                        
                            <Dropdown
                                    style={[styles.dropdown, IsFocusDestination && { borderColor: isDarkMode ? "white" : "black" }]}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    //Style={styles.iconStyle}
                                    data={itemsDestination}
                                    search
                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={!IsFocusDepart ? 'Slectionner Ville Arrivé' : '...'}
                                    searchPlaceholder="Rechercher..."
                                    value={valueDestination}
                                    onFocus={() => setIsFocusDestination(true)}
                                    onBlur={() => setIsFocusDestination(false)}
                                    onChange={item => {
                                        setValueDestination(item.valueDestination);
                                        setIsFocusDestination(false);
                                    }}
                                />
                        </View>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Icon name="alarm" size={24} color={isDarkMode ? "white" : "#02b875"}style={{top: 32, marginLeft: 8}} />
                        <View style={{
                                    // flex: 1,
                                    // alignItems: 'center',
                                    // justifyContent: 'center',
                                    margin: 6
                                    
                                    }}>
                                        <Text isDarkMode={isDarkMode}>Heure de Voyage</Text>
                                 
                                    <Dropdown
                                            style={[styles.dropdown, IsFocusHoraire && { borderColor: isDarkMode ? "white" : "black" }]}
                                            placeholderStyle={styles.placeholderStyle}
                                            selectedTextStyle={styles.selectedTextStyle}
                                            inputSearchStyle={styles.inputSearchStyle}
                                            //iconStyle={styles.iconStyle}
                                            data={itemsHoraire}
                                            search
                                            maxHeight={300}
                                            labelField="label"
                                            valueField="value"
                                            placeholder={!IsFocusDepart ? 'Selectioner votre heure de depart' : '...'}
                                            searchPlaceholder="Search..."
                                            value={valueHoraire}
                                            onFocus={() => setIsFocusHoraire(true)}
                                            onBlur={() => setIsFocusHoraire(false)}
                                            onChange={item => {
                                                setValueDestination(item.valueHoraire);
                                                setIsFocusHoraire(false);
                                            }}
                                        />
                        </View>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Icon name="calendar" size={24} color={ isDarkMode ? "white" : "#02b875"}style={{top: 32, marginLeft: 8}} />
                        <View style={{
                                    margin: 6,
                                    // flex: 1,
                                    // alignItems: 'center',
                                    // justifyContent: 'center',
                                    }}>
                                    <TouchableOpacity 
                                        style={{
                                        marginTop: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderWidth: 1,
                                        height: 50,
                                        width: wp(80),
                                        borderRadius: 12,
                                        borderColor: isDarkMode ? "white" : 'black',
                                       // backgroundColor: isDarkMode ? "white" : 'black'
                                        }}
                                        onPress={() => setOpen(true)}
                                    >
                                        <Text style={{fontSize: 19, color: isDarkMode ? "white" : "black" }}>Date Voyage : {date.toLocaleDateString()} </Text>
                                    </TouchableOpacity>
                                    <DatePicker
                                        modal
                                        open={open}
                                        date={date}
                                        onConfirm={(date) => {
                                        setOpen(false)
                                        setDate(date)
                                        }}
                                        onCancel={() => {
                                        setOpen(false)
                                        }}
                                    />
                                    
                        </View>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Icon name="walk" size={24} color={isDarkMode ? "white" : "#02b875"} style={{top: 32, marginLeft: 8}} />
                        <View style={{
                                    //flex: 1,
                                    // alignItems: 'center',
                                    // justifyContent: 'center',
                                    margin: 6,
                                    
                                    }}>
                                        <Text styles={{display: "flex", alignItems: "flex-start", justifyContent: "flex-start"}} isDarkMode={isDarkMode}>Classique ou VIP</Text>
                                
                                    <Dropdown
                                            style={[styles.dropdown, IsFocusStatus && { borderColor: isDarkMode ? "white" : "black" }]}
                                            placeholderStyle={styles.placeholderStyle}
                                            selectedTextStyle={styles.selectedTextStyle}
                                            inputSearchStyle={styles.inputSearchStyle}
                                            //iconStyle={styles.iconStyle}
                                            data={itemsStatus}
                                            search
                                            maxHeight={300}
                                            labelField="label"
                                            valueField="value"
                                            placeholder={!IsFocusDepart ? 'Sélectioner classique ou VIP' : '...'}
                                            searchPlaceholder="Search..."
                                            value={valueStatus}
                                            onFocus={() => setIsFocusStatus(true)}
                                            onBlur={() => setIsFocusStatus(false)}
                                            onChange={item => {
                                                setValueStatus(item.valueStatus);
                                                setIsFocusStatus(false);
                                            }}
                                        />
                        </View>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-between", margin: 24}}>
                        <TouchableOpacity
                            onPress={() => setDisplaySierge(true)}
                        style={{

                        }}>
                           {selectedSeatNumber !== null ? (
                        <Text styles={{fontSize: 18}} isDarkMode={isDarkMode}>{`Numéro de siège sélectionné est : `}</Text>
                        ) :<View style={{width: wp(50), height: hp(5), borderWidth: 1, borderColor: "green", borderRadius: 12}}><Text isDarkMode={isDarkMode} styles={{fontSize: 20, textAlign: "center", top: 4,}}>Choisisez votre place {selectedSeatNumber}</Text></View> }
                        </TouchableOpacity>
                        <View>
                            <Text isDarkMode={isDarkMode} styles={{fontSize: 22, }}>{selectedSeatNumber}</Text>
                        </View>
                    </View>
                   
                    <TouchableOpacity 
                        onPress={() => setCurrentSrenn("deuxieme")}
                        style={{padding: 12, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#02b875", margin: 22, borderRadius: 22, flexDirection: "row"}}>
                        <Text style={{fontSize: 21, color: isDarkMode ? '#fff' : 'black', textAlign: "center"}}> CONTINUER </Text> 
                        <Icon name="arrow-forward" size={28} color={isDarkMode ? "white" : "black"}/>
                    </TouchableOpacity>
              
                </Card>
            </Card>



            {/* Enveloppez le texte dans un composant Text */}
            <TouchableOpacity onPress={() => setCurrentSrenn("deuxieme")} ><Text isDarkMode={isDarkMode}>click</Text></TouchableOpacity>
            <SiergeModal displaySierge={displaySierge} setDisplaySierge={setDisplaySierge} selectedSeatNumber={selectedSeatNumber}/>
        </ScrollView>
        </>
    )
}

// ercan 2
            //{currentSrenn === "deuxieme" && <Ecran2 name={name}/>}
const Ecran2 = ({name, setName, SetPrenom, Prenom, numCNI, setNumCNI, telephone, setTelephone, valueDepart, setValueDepart, valueDestination, setValueDestination, valueHoraire, setValueHoraire, valueStatus, setValueStatus}) => {
    const navigation = useNavigation()
const {isDarkMode} = useContext(DarkMode)
   const [displayVerification, setDisplayVerification] = useState(false)  
  
    const [IsFocusSexe, setIsFocusSexe] = useState(false);
    const [valueSexe, setValueSexe] = useState(null);
    const [itemsSexe, setItemsSexe] = useState([
        {
            id: 1,
            sexe: "Homme"
        },
        {
            id: 2,
            sexe: "Femme"
        }
    ]);

    const verificationModal = ({navigation}) => {
        return(
            <Dialog.Container useNativeDriver={true} visible={displayVerification}>
                <ScrollView>
                    <Card isDarkMode={isDarkMode} style={{
                        width: wp(80), height: hp("60%")
                    }}>

                    <Dialog.Title style={{marginBottom: 12, textAlign: "center"}} isDarkMode={isDarkMode}>Reservation</Dialog.Title>

                    <View styles={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <Text styles={{ fontSize: 18,}} isDarkMode={isDarkMode}>Informtion sur le client</Text>
                        </View>
                    <View style={{margin: 8 }}>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <View style={{flex: 1}}>
                                <Text isDarkMode={isDarkMode}>Nom : </Text>
                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                <Text isDarkMode={isDarkMode}>{name}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <View style={{flex: 1}}>
                                <Text isDarkMode={isDarkMode}>Prenom</Text>
                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                <Text
                                    isDarkMode={isDarkMode}>{Prenom}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <View style={{flex: 1}}>
                                <Text isDarkMode={isDarkMode}>Numero Telephone</Text>
                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                <Text
                                    isDarkMode={isDarkMode}>{telephone}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <View style={{flex: 1}}>
                                <Text isDarkMode={isDarkMode}>Sexe</Text>
                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                <Text
                                    isDarkMode={isDarkMode}>{valueSexe}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <View style={{flex: 1}}>
                                <Text isDarkMode={isDarkMode}>Numero CNI</Text>
                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                <Text
                                    isDarkMode={isDarkMode}>{numCNI}</Text>
                            </View>
                        </View>
                        <View styles={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <Text styles={{ fontSize: 18, marginVertical: 10, }} isDarkMode={isDarkMode}>Informtion sur le voyage</Text>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <View style={{flex: 1}}>
                                <Text isDarkMode={isDarkMode}>depart</Text>
                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                <Text
                                    isDarkMode={isDarkMode}>Douala</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <View style={{flex: 1}}>
                                <Text isDarkMode={isDarkMode}>Arrivé</Text>
                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                <Text
                                    isDarkMode={isDarkMode}>Mbouda</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <View style={{flex: 1}}>
                                <Text isDarkMode={isDarkMode}>Numero Siege</Text>
                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                <Text
                                    isDarkMode={isDarkMode}>12</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <View style={{flex: 1}}>
                                <Text isDarkMode={isDarkMode}>Type de bus</Text>
                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                <Text
                                    isDarkMode={isDarkMode}>VIP</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <View style={{flex: 1}}>
                                <Text isDarkMode={isDarkMode}>Prix</Text>
                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                <Text
                                    isDarkMode={isDarkMode}>6500 Frs</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <View style={{flex: 1}}>
                                <Text isDarkMode={isDarkMode}>Categorie bus</Text>
                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                <Text
                                    isDarkMode={isDarkMode}>A</Text>
                            </View>
                        </View>
                    
                    </View>

                    <View style={{display: "flex", justifyContent: "space-between", alignItems: 'center', flexDirection: "row", marginHorizontal: 12}}>
                        <TouchableOpacity onPress={() => {}} style={{flexDirection: 'row'}}>
                        <Text isDarkMode={isDarkMode}>Imprimer</Text> 
                        <Icon name="print" size={28} color={isDarkMode ? 'white' : 'black'} />
                        </TouchableOpacity>
                        <Dialog.Button bold={true} label={"OK"} onPress={() => navigation.navigate('paiement')}/>
                    </View>

                        <Dialog.Button label="Annuler" style={{display: "flex", justifyContent: "flex-end", alignItems: "flex-end"}} onPress={() => setDisplayVerification(false)} />
                    </Card>
                </ScrollView>
        </Dialog.Container>
    
        )
    }
    return(
        <>
        <ScrollView>
            
            <Card isDarkMode={isDarkMode}>

                <Image 
                    source={require("../../../assets/images/1.jpg")}
                    style={{ height: hp(35), borderBottomRightRadius: 22}}
                />
                <View
                    style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between", 
                    alignItems: "center",
                    paddingHorizontal: 14,
                    marginTop: 18,
                    position: "absolute",
                    }}>
            <TouchableOpacity 
                onPress={() => navigation.goBack()}
                style={{width: 35, height: 35, backgroundColor: "#2319194f", borderRadius: 8}}
            >
                <Icon style={{left: 2, top: 2}} name="chevron-back" size={28} color={isDarkMode ? 'white' : '#02b875'}/>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => {}}
            style={{width: 35, height: 35, backgroundColor: "#2319194f", borderRadius: 8, left: wp(73)}}>
                <Icon style={{left: 4, top: 2}} name="bookmarks" size={28} color={isDarkMode ? 'white' : '#02b875'}/>
            </TouchableOpacity>
                </View>
                <Card isDarkMode={isDarkMode} style={{
                        marginHorizontal: 8,
                        //backgroundColor: "#ccc",
                        bottom: 120,
                        borderRadius: 12
                    }}>
                
                    <View style={{flexDirection: "row"}}>
                        <Icon name="person" size={24} color={isDarkMode ? "white" : "#02b875"}style={{top: 34, marginLeft: 4}} />
                        <View style={{
                        margin: 6,
                        }}>
                            <Text styles={{}} isDarkMode={isDarkMode}>Nom: </Text>
                            <TextInput
                                style={[styles.dropdown, {borderColor: isDarkMode ? "white" : "black" }]}
                                placeholderStyle={styles.placeholderStyle}
                                placeholder={'Entrez votre Nom'}
                                value={name}
                                onChangeText={text => setName(text)}
                            />
                        </View>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Icon name="person-circle" size={24} color={isDarkMode ? "white" : "#02b875"}style={{top: 34, marginLeft: 4}} />
                        <View style={{
                        margin: 6,
                        }}>
                            <Text styles={{}} isDarkMode={isDarkMode}>Prenom : </Text>
                            <TextInput
                                style={[styles.dropdown, {borderColor: isDarkMode ? "white" : "black" }]}
                                placeholderStyle={styles.placeholderStyle}
                                placeholder={'Entrez votre Prenom'}
                                value={Prenom}
                                onChangeText={text => SetPrenom(text)}
                            />
                        </View>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Icon name="card" size={24} color={isDarkMode ? "white" : "#02b875"}style={{top: 34, marginLeft: 4}} />
                        <View style={{
                        margin: 6,
                        }}>
                            <Text styles={{}} isDarkMode={isDarkMode}>Numero CNI : </Text>
                            <TextInput
                                style={[styles.dropdown, {borderColor: isDarkMode ? "white" : "black" }]}
                                placeholderStyle={styles.placeholderStyle}
                                placeholder={'expl: 120012341   OU   KT1230'}
                                value={numCNI}
                                onChangeText={text => setNumCNI(text)}
                            />
                        </View>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Icon name="card" size={24} color={isDarkMode ? "white" : "#02b875"}style={{top: 34, marginLeft: 4}} />
                        <View style={{
                        margin: 6,
                        }}>
                            <Text styles={{}} isDarkMode={isDarkMode}>Numero Téléphone : </Text>
                            <TextInput
                                style={[styles.dropdown, {borderColor: isDarkMode ? "white" : "black" }]}
                                placeholderStyle={styles.placeholderStyle}
                                placeholder={'expl: 690999999'}
                                value={telephone}
                                keyboardType='numeric'
                                onChangeText={text => setTelephone(text)}
                            />
                        </View>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Icon name="git-merge" size={24} color={isDarkMode ? "white" : "#02b875"}style={{top: 32, marginLeft: 4}} />
                        <View style={{
                        margin: 6,
                      
                        }}>
                                <Text isDarkMode={isDarkMode}>Sexe : </Text>
                                <Dropdown
                                style={[styles.dropdown, IsFocusSexe && {borderColor: isDarkMode ? "white" : "black" }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                data={itemsSexe}
                                maxHeight={300}
                                labelField="sexe"
                                valueField="id"
                                placeholder={!IsFocusSexe ? 'Sélectionner votre SEXE' : '...'}
                                value={valueSexe}
                                onFocus={() => setIsFocusSexe(true)}
                                onBlur={() => setIsFocusSexe(false)}
                                onChange={item => {
                                    setValueSexe(item.sexe);
                                    setIsFocusSexe(false);
                                }}
                            />
                        </View>
                    </View>
                    <TouchableOpacity 
                        onPress={() => setDisplayVerification(true)}
                        style={{padding: 12, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#02b875", margin: 22, borderRadius: 22, flexDirection: "row"}}>
                        <Text style={{fontSize: 21, color: isDarkMode ? '#fff' : 'black', textAlign: "center"}}> VALIDER </Text> 
                        <Icon name="checkmark-done" size={28} color={isDarkMode ? "white" : "black"}/>
                    </TouchableOpacity>
                    {verificationModal()}              
                </Card>
            </Card>



            {/* Enveloppez le texte dans un composant Text */}
            <TouchableOpacity onPress={() => setCurrentSrenn("deuxieme")} ><Text isDarkMode={isDarkMode}>click</Text></TouchableOpacity>
            {/* <verificationModal displayVerification={displayVerification} setDisplayVerification={setDisplayVerification}/> */}
        </ScrollView>
        </>
    )
}

// ercan 3
const Ecran3 = () => {
    return(
        <>
        <View>
            <Text>Ecran 3</Text>
            <TouchableOpacity onPress={() => setCurrentSrenn("Siege")} ><Text>click</Text></TouchableOpacity>
        </View>
        </>
    )
}

// Ecran 4
const Sierge = () => {
    return(
        <>
            <View>
                <Text>Siege</Text>
                <TouchableOpacity onPress={() => setCurrentSrenn("Troisieme")} ><Text>click</Text></TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      //backgroundColor: 'white',
      padding: 16,
    },
    dropdown: {
      height: 50,
      width: wp(80),
      //borderColor: {isDarkMode ? "white" : "black"},
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      backgroundColor: "white"
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      //backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });