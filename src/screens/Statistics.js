import { Text, View, StyleSheet, Dimensions } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { LineChart, PieChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};

const data = [
    {
        name: "Other",
        population: 600,
        color: "#7149C6",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Food",
        population: 400,
        color: "#FC2947",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Stationery",
        population: 700,
        color: "#FE6244",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Grocery",
        population: 1000,
        color: "#FFDEB9",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Clothes",
        population: 1750,
        color: "#E49393",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    }
];
const Statistics = () => {
    return (
        <View style={styles.container}>

            <View style={{ alignItems: 'center', marginVertical: 25 }}>
                <Text style={{ fontSize: 30, textDecorationLine: 'underline', fontStyle:'italic', fontWeight:'bold' }}> Expense Analysis </Text>
                <PieChart
                    data={data}
                    width={screenWidth}
                    height={250}
                    chartConfig={chartConfig}
                    accessor={"population"}
                    backgroundColor={"transparent"}
                    paddingLeft={"15"}
                    center={[10, 10]}
                />
            </View>
        </View>
    );
}
export default Statistics;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
        backgroundColor: GlobalStyles.colors.primary700
    },
});