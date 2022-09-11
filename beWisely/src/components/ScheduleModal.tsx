import { useState } from "react";
import { View, Modal, Alert, Pressable, StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

export const ScheduleModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>Summary</Text>
            <Text style={styles.body}>1x Aula particular com o monitor
              H. Romeu Pinto, sobre lógica de programação das 14:00h às 16:00h no dia 27/07/2022</Text>
            {/* <Text>1x Aula particular com o monitor
              {monitorName}, sobre lógica de programação das {lessonStart} às {lessonEnd} no dia {lessonDate}
              </Text>
              <Text>R${lessonPrice}</Text> */}
            <Text style={styles.price}>total: R$ 120,00</Text>
            <View style={styles.container}>
              <Pressable
                style={styles.buttons}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textConfirmar}>Confirmar</Text>
              </Pressable>
              <Pressable
                style={styles.buttons}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textCancel} >Cancelar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Pressable onPress={() => setModalVisible(true)}>
        <RectButton style={styles.button} >
          <Text style={styles.buttonText}>Confirmar</Text>
        </RectButton>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontFamily: 'Jost_600SemiBold',
    color: '#52665A',
    fontSize: 30,
  },
  body: {
    fontFamily: 'Jost_400Regular',
    color: '#52665A',
    fontSize: 20,
    marginTop: 20
  },
  button: {
    backgroundColor: '#FFDB9A',
    height: 56,
    paddingHorizontal: 40,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttons: {
    backgroundColor: '#FAF5F5',
    height: 56,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginLeft: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Jost_500Medium',
    fontSize: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  textConfirmar: {
    color: '#31f37b',
    fontFamily: 'Jost_600SemiBold',
    fontSize: 15,
  },
  textCancel: {
    color: '#f33131',
    fontFamily: 'Jost_600SemiBold',
    fontSize: 15,
  },
  price: {
    fontFamily: 'Jost_500Medium',
    color: '#52665A',
    fontSize: 20,
    marginTop: 20
  }
});
