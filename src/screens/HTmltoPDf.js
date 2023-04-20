import React from 'react';
import { Text, TouchableHighlight, View, } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { GlobalStyles } from '../constants/styles';

const HtmlToPdf = () => {
  const createPDF = async () => {
    let options = {
      html: '<!DOCTYPE html>' +
        '<html>' +
        '<head>' +
        '<meta charset="UTF-8">' +
        '<title>Expense Tracker App</title>' +
        '</head>' +
        '<body>' +
        '<h1 style="text-decoration:underline"> Expenses Report </h1>' +
        '<table border=1>' +
        '<thead>' +
        '<tr>' +
        '<th>amount</th>' +
        '<th>color</th>' +
        ' <th>date</th>' +
        '<th>description</th>' +
        '<th>dropdown</th>' +
        ' <th>id</th>' +
        '<th>legendFontColor</th>' +
        '<th>name</th>' +
        ' </tr>' +
        '</thead>' +
        '<tbody>' +
        '<tr>' +
        '<td>220</td>' +
        '<td>#800</td>' +
        ' <td>2023-04-18T13:06:44.214Z</td>' +
        ' <td>Petrol</td>' +
        ' <td>Fuel</td>' +
        ' <td>-NTJTQYBZmG9ddU9BQa_</td>' +
        '<td>#7F7F7F</td>' +
        '<td>Fuel</td>' +
        '</tr>' +
        '<tr>' +
        '<td>500</td>' +
        ' <td>#FFFF00</td>' +
        '<td>2022-11-23T11:58:22.478Z</td>' +
        ' <td>T-SHIRT</td>' +
        '<td>Garment</td>' +
        '<td>-NSB7YmrPAul_eP54I5o</td>' +
        '<td>#7F7F7F</td>' +
        '<td>Garment</td>' +
        ' </tr>' +
        '<tr>' +
        '<td>450</td>' +
        '<td>#088</td>' +
        '<td>2021-04-04T11:57:51.088Z</td>' +
        ' <td>Dinner </td>' +
        '<td>Food</td>' +
        '  <td>-NSB7SS8rQkvjmfGJw1M</td>' +
        ' <td>#7F7F7F</td>' +
        '<td>Food</td>' +
        ' </tr>' +
        ' <tr>' +
        ' <td>50</td>' +
        ' <td>#0000ff</td>' +
        ' <td>2023-03-25T11:54:26.013Z</td>' +
        '<td>Pen</td>' +
        ' <td>Stationary</td>' +
        ' <td>-NS5y0RmoPJSMuQkGxc3</td>' +
        '  <td>#7F7F7F</td>' +
        ' <td>Stationary</td>' +
        ' </tr>' +
        ' <tr>' +
        '<td>1000</td>' +
        ' <td>#FF8852</td>' +
        ' <td>2023-03-29T11:54:07.920Z</td>' +
        '<td>Rice</td>' +
        '<td>Grocery</td>' +
        ' <td>-NS5xyd-tgqgc17sWmpN</td>' +
        '<td>#7F7F7F</td>' +
        '<td>Grocery</td>' +
        '</tr>' +
        '<tr>' +
        '<td>230</td>' +
        '<td>#ccc</td>' +
        '<td>2023-03-14T11:53:50.327Z</td>' +
        ' <td>Petrol</td>' +
        ' <td>Fuel</td>' +
        '<td>-NS5xuEHV7iJGIxMOXhK</td>' +
        ' <td>#7F7F7F</td>' +
        '<td>Fuel</td>' +
        '</tr>' +
        ' <tr>' +
        '<td>500</td>' +
        '<td></td>' +
        '<td>2023-04-06T12:04:03.046Z</td>' +
        '<td>Dinner</td>' +
        '<td>Food</td>' +
        ' <td>-NS5xpHPlZfy2rCE6DBs</td>' +
        ' <td>#7F7F7F</td>' +
        '<td>Food</td>' +
        '</tr>' +
        ' <tr>' +
        ' <td></td>' +
        ' <td>&nbsp</td>' +
        '<td>&nbsp</td>' +
        '<td>&nbsp</td>' +
        '<td>&nbsp</td>' +
        '<td>&nbsp</td>' +
        '<td>&nbsp</td>' +
        '<td>&nbsp</td>' +
        '</tr>' +
        ' </tbody>' +
        '</table>' +
        '</body>' +
        '</html>',
      fileName: 'ExpenseDetails',
      directory: 'Documents',
    };

    let file = await RNHTMLtoPDF.convert(options);
    console.log(file.filePath);
    alert(file.filePath);
  }

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: GlobalStyles.colors.primary700 }}>
      <TouchableHighlight style={{
        width: '80%',
        padding: 10,
        backgroundColor: '#1746a2',
        margin: 10,
      }} onPress={createPDF}>
        <Text style={{ textAlign: 'center' }}>Create PDF</Text>
      </TouchableHighlight>
    </View>
  )
}
export default HtmlToPdf;