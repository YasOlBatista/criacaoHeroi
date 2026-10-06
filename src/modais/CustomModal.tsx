import { BotaoCustomizado } from "@/components/BotaoCustomizado";
import { useState } from "react";
import { Modal, StyleSheet, Text, TextInput, View } from "react-native";

interface CustomModalProps {
    visible: boolean;
    onClose: () => void;
    onSave: (nome: string, classe: string) => void;
}

export default function CustomModal({ visible, onClose, onSave }: CustomModalProps) {
    const [nome, setNome] = useState("");
    const [classe, setClasse] = useState("");
    const [erros, setErros] = useState<{ nome?: string; classe?: string }>({});

    const validarCampos = (): boolean => {
        const novosErros: { nome?: string; classe?: string } = {};

        if (!nome.trim()) {
            novosErros.nome = "Nome é obrigatório";
        }

        if (!classe.trim()) {
            novosErros.classe = "Classe é obrigatória";
        }

        setErros(novosErros);
        return Object.keys(novosErros).length === 0;
    };

    const handleSave = () => {
        if (validarCampos()) {
            onSave(nome, classe);
            setNome("");
            setClasse("");
            setErros({});
        }
    };

    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Adicionar Novo Herói</Text>
                    
                    <TextInput 
                        style={[styles.input, erros.nome && styles.inputError]} 
                        placeholder="Nome do Herói"
                        value={nome}
                        onChangeText={setNome}
                    />
                    {erros.nome && <Text style={styles.errorText}>{erros.nome}</Text>}

                    <TextInput 
                        style={[styles.input, erros.classe && styles.inputError]} 
                        placeholder="Classe do Herói"
                        value={classe}
                        onChangeText={setClasse}
                    />
                    {erros.classe && <Text style={styles.errorText}>{erros.classe}</Text>}

                    <BotaoCustomizado title="Salvar" corFundo="#2563eb" onPress={handleSave}/>
                    <BotaoCustomizado title="Cancelar" corFundo="#dc2626" onPress={onClose}/>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 24,
        borderRadius: 20,
        alignItems: "center",
        minHeight: 220
    },
    input:{
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#d1d5db",
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        color: "#111827",
        backgroundColor: "#f9fafb",
        marginBottom: 12,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputError: {
        borderColor: "#ef4444",
    },
    errorText: {
        color: "#ef4444",
        fontSize: 12,
        marginBottom: 12,
        marginTop: -8,
    },
})