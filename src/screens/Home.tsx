import React, { useState, useCallback } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFocusEffect } from "@react-navigation/native";
import { Consulta } from "../interfaces/consulta";
import { styles } from "../styles/app.styles";
import { obterConsultas, salvarConsultas } from "../services/storage";
import { ConsultaCard } from "../components";

export default function Home({
    navigation,
}: {
    navigation: { navigate: (screen: string) => void };
}) {
    const [consultas, setConsultas] = useState<Consulta[]>([]);

    useFocusEffect(
        useCallback(() => {
            carregarConsultas();
        }, [])
    );

    async function carregarConsultas() {
        const consultasSalvas = await obterConsultas();
        setConsultas(consultasSalvas);
    }

    async function confirmarConsulta(consultaId: number) {
        const consultasAtualizadas = consultas.map((consulta) =>
            consulta.id === consultaId
                ? { ...consulta, status: "confirmada" as const }
                : consulta
        );
        setConsultas(consultasAtualizadas);
        await salvarConsultas(consultasAtualizadas);
    }

    async function cancelarConsulta(consultaId: number) {
        const consultasAtualizadas = consultas.map((consulta) =>
            consulta.id === consultaId
                ? { ...consulta, status: "cancelada" as const }
                : consulta
        );
        setConsultas(consultasAtualizadas);
        await salvarConsultas(consultasAtualizadas);
    }

    return (
        <View style={styles.container}>
            <StatusBar style="light" />git add .
git status
git commit -m "feat: AsyncStorage em arrays, service layer e navegação Home/Admin - Aula 03/09/2026"
git push origin main





            <ScrollView contentContainerStyle={styles.scrollContent}>git add .
git status
git commit -m "feat: AsyncStorage em arrays, service layer e navegação Home/Admin - Aula 03/09/2026"
git push origin main





                <View style={styles.header}>git add .
git status
git commit -m "feat: AsyncStorage em arrays, service layer e navegação Home/Admin - Aula 03/09/2026"
git push origin main





                    <Text style={styles.titulo}>Minhas Consultas</Text>git add .
git status
git commit -m "feat: AsyncStorage em arrays, service layer e navegação Home/Admin - Aula 03/09/2026"
git push origin main





                    <Text style={styles.subtitulo}>git add .
git status
git commit -m "feat: AsyncStorage em arrays, service layer e navegação Home/Admin - Aula 03/09/2026"
git push origin main





                        {consultas.length} consulta(s) cadastrada(s)git add .
git status
git commit -m "feat: AsyncStorage em arrays, service layer e navegação Home/Admin - Aula 03/09/2026"
git push origin main





                    </Text>
                </View>

                <View style={styles.botaoAdmin}>
                    <Button
                        title="Painel Admin"
                        onPress={() => navigation.navigate("Admin")}
                        color="#4CAF50"
                    />
                </View>

                {consultas.length === 0 ? (
                    <View style={styles.vazio}>
                        <Text style={styles.vazioTexto}>
                            Nenhuma consulta agendada ainda
                        </Text>
                        <Button
                            title="Cadastrar no Admin"
                            onPress={() => navigation.navigate("Admin")}
                        />
                    </View>
                ) : (
                    consultas.map((consulta) => (
                        <ConsultaCard
                            key={consulta.id}
                            consulta={consulta}
                            onConfirmar={() => confirmarConsulta(consulta.id)}
                            onCancelar={() => cancelarConsulta(consulta.id)}
                        />
                    ))
                )}
            </ScrollView>
        </View>
    );
}




