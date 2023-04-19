import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf-rd';

const HtmlToPdf = () => {
  const createPDF = async () => {
    let options = {
      html: '<!DOCTYPE html>' +
        '<html>' +
        '  <head>' +
        '<style>' +
        '.container { margin: auto;}' +
        '.card {margin-bottom: 15px;position: relative; display: -ms-flexbox; display: flex; -ms-flex-direction: column; flex-direction: column; min-width: 0; word-wrap: break-word; background-color: #fff background-clip: border-box; border: 1px solid rgba(0, 0, 0, .125); border-radius: 0.25rem; }' +
        '.card-header {padding: 0.75rem 1.25rem; margin-bottom: 0; background-color: rgba(0, 0, 0, .03); border-bottom: 1px solid rgba(0, 0, 0, .125); }' +
        '.card-main-header {display: flex; align-items: center; padding-left: 42px; }' +
        '.card-main-header {display: flex; align-items: center; padding-left: 42px; }' +
        '.card-body {-ms-flex: 1 1 auto; flex: 1 1 auto; min-height: 1px; padding: 1.25rem;}' +
        '.p-2 {padding: 0.5rem !important; }' +
        '.mb-2, .my-2 {margin-bottom: 0.5rem !important; }' +
        'b, strong {font-weight: bolder; }' +
        '.row {display: -ms-flexbox; display: flex; -ms-flex-wrap: wrap; flex-wrap: wrap; margin-right: -15px; margin-left: -15px; }' +
        '.col-sm-6 {width: 45%; align-items: center; position: relative; padding-right: 15px; padding-left: 15px; }' +
        '.Main-header-contain {text-align: center; width: 50%; margin: auto; }' +
        '.table {width: 98%; margin-bottom: 1rem; color: #212529; }' +
        '.table th, .table td {padding: 0px 10px; }' +
        '.table-responsive {margin-bottom: 0; }' +
        '.address p {margin: 5px 0; }' +
        'ul.order-details li {margin: 4px 0; }' +
        'table {border-collapse: collapse; }' +
        'th, td {border: 1px solid black; }' +
        '.table .thead-dark th {color: #fff; background-color: #343a40; border-color: #454d55; }' +
        '.table-bordered td, .table-bordered th {border: 1px solid #dee2e6; text-align: center; }' +
        'tr.table-sub-head th {color: #fff; background-color: #343a40; border-color: #454d55; }' +
        '.page_Footer p {margin:5px 0;}' +
        '</style>' +
        '</head>' +
        '<div class="container">' +
        '<div class="card mt-5">' +
        '<div class="card-main-header">' +
        '<div class="logo"><img src="https://www.alphaebarcode.com/images/Logo.png?v=1" alt="logo" class="img-fluid main-logo" width="200"></div>' +
        '<div class="Main-header-contain">' +
        '<p style="font-size: 25px;font-weight: bold; margin-bottom: 0;">ALPHA E BARCODE</p>' +
        '<p class="address"> AGRWAL Avenue.Telephone EXCHANGE AHMEDABAD-560037 Ph-07940144144, E-Mail:alphaebarcode@gmail.com PAN NO : PAN GSTIN No :29AABCT1332L000 </p>' +
        '</div>' +
        '</div>' +
        '<div class="card-header">' +
        '<strong style="font-size: 25px">SALES ORDER</strong>' +
        '<span class="float-right mt-2" style="text-align: revert;float: right;"> Original/Duplicate</span>' +
        '</div>' +
        '<div class="card-body">' +
        '<div class="row mb-4">' +
        '<div class="col-sm-6">' +
        '<div class="card p-2">' +
        '<div class="address">' +
        '<strong class="mb-2">To:</strong>' +
        '<p>' +
        '<strong>AAYUSHI SANGHAVI </strong>' +
        '</p>' +
        '<p>819 TIMES SQUIRE</p>' +
        '<p>AHMEDABAD 380015,Gujarat</p>' +
        '<p>Email: mitesh1solanki@gmail.com</p>' +
        '<p>Phone: +91 999 811 4860</p>' +
        '<p>GST NO: </p>' +
        '<p>Contact Person: </p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="col-sm-6">' +
        '<div class="card p-2">' +
        '<div class="content">' +
        '<ul class="order-details" style="list-style-type: none; margin-bottom: 8px;padding-left: 5px;margin-top: 0;">' +
        '<li> <strong>Order No: 00001 </strong> </li>' +
        '<li><strong>Date: </strong> 10/04/2023</li>' +
        '<li><strong>Agent: </strong> AGENT VINOD</li>' +
        '<li><strong>Season: </strong> Summar</li>' +
        '<li><strong>Transport: </strong> PATEL TRANSPORT</li>' +
        '<li><strong>Paid/Topay : </strong> Paid</li>' +
        '<li><strong>Order Type : </strong> </li>' +
        '<li><strong>Marketing By : </strong> </li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="table-responsive-sm">' +
        '<table class="table table-bordered">' +
        '<thead class="thead-dark">' +
        '<tr>' +
        '<th class="center">Sr</th>' +
        '<th>Style No </th>' +
        '<th>Color</th>' +
        '<th class="right">Size</th>' +
        '<th class="center">Pcs</th>' +
        '<th class="right">MRP</th>' +
        '<th class="right">Amount Rs</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>' +
        '<tr class="table-sub-head">' +
        '<th class="center"></th>' +
        '<th colspan="2">BEING HUMAN / M.T-SHIRT </th>' +
        '<th>' +
        '<table class="table table-responsive">' +
        '<thead>' +
        '<tr>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold; font-size: 13px;">S</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold; font-size: 13px;">M</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold; font-size: 13px;">L</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold; font-size: 13px;">XL</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold; font-size: 13px;">2XL</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold; font-size: 13px;">3XL</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold; font-size: 13px;">4XL</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold; font-size: 13px;">5XL</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold; font-size: 13px;"></div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold; font-size: 13px;"></div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold; font-size: 13px;"></div></th>' +
        '</tr>' +
        '</thead>' +
        '</table>' +
        '</th>' +
        '<th class="center"></th>' +
        '<th class="right"></th>' +
        '<th class="right"></th>' +
        '</tr>' +
        '<tr>' +
        '<td class="center">1</td>' +
        '<td class="strong">00125</td>' +
        '<td>BLUE</td>' +
        '<td>' +
        '<table class="table table-responsive mb-0">' +
        '<tbody>' +
        '<tr>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: 400; font-size: 13px;">10</div></th> ' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: 400; font-size: 13px;"></div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: 400; font-size: 13px;">5</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: 400; font-size: 13px;">20</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: 400; font-size: 13px;">25</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: 400; font-size: 13px;"></div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: 400; font-size: 13px;">2</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: 400; font-size: 13px;"></div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: 400; font-size: 13px;"></div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: 400; font-size: 13px;"></div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: 400; font-size: 13px;"></div></th>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '</td>' +
        '<td class="center">20</td>' +
        '<td class="right">999,00</td>' +
        '<td class="right">999,00</td>' +
        '</tr>' +
        '<tr>' +
        '<th class="center"></th>' +
        '<th colspan="2" style="color: brown;">Total </th>' +
        '<th>' +
        '<table class="table table-responsive">' +
        '<thead>' +
        '<tr>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;">10</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;"></div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;">5</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;">20</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;">25</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;"></div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;">2</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;"></div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;"></div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;"></div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;"></div></th>' +
        '</tr>' +
        '</thead>' +
        '</table>' +
        '</th>' +
        '<th class="center" style="color:brown;">20</th>' +
        '<th class="center" style="color:brown;"></th>' +
        '<th class="center" style="color:brown;"></th>' +
        '</tr>' +
        '<tr class="table-sub-head">' +
        '<th class="center"></th>' +
        '<th colspan="2">BEING HUMAN / M.T-SHIRT </th>' +
        '<th>' +
        '<table class="table table-responsive">' +
        '<thead>' +
        '<tr>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold; font-size: 13px;">S</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold; font-size: 13px;">M</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold; font-size: 13px;">L</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold; font-size: 13px;">XL</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold; font-size: 13px;">2XL</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold; font-size: 13px;">3XL</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold; font-size: 13px;">4XL</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold; font-size: 13px;">5XL</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold; font-size: 13px;"></div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold; font-size: 13px;"></div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold; font-size: 13px;"></div></th>' +
        '</tr>' +
        '</thead>' +
        '</table>' +
        '</th>' +
        '<th class="center">' +
        '</th>' +
        '<th class="right"></th>' +
        '<th class="right"></th>' +
        '</tr>' +
        '<tr>' +
        '<td class="center">1</td>' +
        '<td class="strong">00125</td>' +
        '<td>BLUE</td>' +
        '<td>' +
        '<table class="table table-responsive mb-0">' +
        '<tbody>' +
        '<tr>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: 400; font-size: 13px;">10</div></th> ' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: 400; font-size: 13px;"></div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: 400; font-size: 13px;">5</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: 400; font-size: 13px;">20</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: 400; font-size: 13px;">25</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: 400; font-size: 13px;"></div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: 400; font-size: 13px;">2</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: 400; font-size: 13px;"></div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: 400; font-size: 13px;"></div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: 400; font-size: 13px;"></div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: 400; font-size: 13px;"></div></th>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '</td>' +
        '<td class="center">20</td>' +
        '<td class="right">999,00</td>' +
        '<td class="right">999,00</td>' +
        '</tr>' +
        '<tr>' +
        '<th class="center"></th>' +
        '<th colspan="2" style="color: brown;">Total </th>' +
        '<th>' +
        '<table class="table table-responsive">' +
        '<thead>' +
        '<tr>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;">10</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;"></div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;">5</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;">20</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;">25</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;"></div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;">2</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;"></div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;"></div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;"></div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;"></div></th>' +
        '</tr>' +
        '</thead>' +
        '</table>' +
        '</th>' +
        '<th class="center" style="color:brown;">20</th>' +
        '<th class="center" style="color:brown;"></th>' +
        '<th class="center" style="color:brown;"></th>' +
        '</tr>' +
        '</tbody>' +
        '<tfoot>' +
        '<tr style="background: #ccc;">' +
        '<th class="center"></th>' +
        '<th colspan="2" style="color: brown;"></th>' +
        '<th>' +
        '<table class="table table-responsive">' +
        '<thead>' +
        '<tr>' +
        '<th style="padding: 5px 5px;">' +
        '<div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;">20</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;"></div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;">10</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;">40</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;">50</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;"></div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;">4</div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;"></div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;"></div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;"></div></th>' +
        '<th style="padding: 5px 5px;"><div style="width: 25px;text-align: center;font-weight: bold;color:brown; font-size: 13px;"></div></th>' +
        '</tr>' +
        '</thead>' +
        '</table>' +
        '</th>' +
        '<th class="center" style="color:brown;">20</th>' +
        '<th class="center" style="color:brown;"></th>' +
        '<th class="center" style="color:brown;"></th>' +
        '</tr>' +
        '<tr>' +
        '<th colspan="4">' +
        '<div style="display: flex;">' +
        '<p class="d-inline-block float-left mt-2" style="width: 100%;text-align: left;">' +
        '<strong> Rupees</strong> :' +
        '<strong>FORTY-NINE THOUSAND NINE HUNDRED FORTY' +
        'ONLY</strong>' +
        '</p>' +
        '<p class="float-right mt-2 d-inline-block" style="text-align: right;width: 100%;">' +
        'Total Qty : 50</p>' +
        '</div>' +
        '</th>' +
        '<th>60</th>' +
        '<th></th>' +
        '<th>49940.00</th>' +
        '</tr>' +
        '</tfoot>' +
        '</table>' +
        '</div>' +
        '<div class="page_Footer">' +
        '<div style="display: flex;justify-content: space-between;"><p><strong>Remarks : </strong> </p><p><strong>for, ALPHA E BARCODE </strong> </p></div>' +
        '<p><strong>Credit Days : 50 </strong> </p>' +
        '<div style="display: flex;justify-content: space-between;">' +
        '<p><strong>Entered By : </strong> </p>' +
        '<p><strong>Authorised Signatory </strong> </p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<body>' +
        '</body>' +
        '</html>',
      fileName: 'FinalDocument',
      directory: 'Documents',
    };

    let file = await RNHTMLtoPDF.convert(options);
    console.log(file.filePath);
    alert(file.filePath);
  }

  return (
    <View>
      <TouchableHighlight style={{
        width: '80%',
        padding: 10,
        backgroundColor: '#1746a2',
        margin: 10,
      }} onPress={createPDF}>
        <Text>Create PDF</Text>
      </TouchableHighlight>
    </View>
  )
}

export default HtmlToPdf;






