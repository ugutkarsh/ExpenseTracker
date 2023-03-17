import { Text, View, StyleSheet, Dimensions } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { LineChart, PieChart } from "react-native-chart-kit";

const Statistics = () => {
    return (
        <View style={styles.container}>



            <View>
                <Text>Bezier Line Chart</Text>
                <LineChart
                    data={{
                        labels: ["January", "February", "March", "April", "May", "June"],
                        datasets: [
                            {
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                ]
                            }
                        ]
                    }}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    yAxisLabel="$"
                    yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "#20232B",
                        backgroundGradientFrom: "#20232B",
                        backgroundGradientTo: "#20232B",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726",
                        },
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
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
        justifyContent: "center",
        backgroundColor: GlobalStyles.colors.primary700
    },
});