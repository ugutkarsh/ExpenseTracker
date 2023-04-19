import React, { useState } from 'react';
import { Linking } from 'react-native';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import { Image, TouchableOpacity, Switch, Alert } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const SECTIONS = [
    {
        header: 'Preferences',
        items: [
            { id: 'language', icon: 'globe', label: 'Language', type: 'select' },
            { id: 'darkMode', icon: 'moon', label: 'Dark Mode', type: 'toggle' },
            { id: 'notification', icon: 'bell', label: 'Notifications', type: 'toggle' },
        ],
    },
    {
        header: 'Help',
        items: [
            { id: 'bug', icon: 'flag', label: 'Report Bug', type: 'link' },
            { id: 'contact', icon: 'info', label: 'About Us', type: 'link' },
        ],
    },
    {
        header: 'Content',
        items: [
            { id: 'download', icon: 'download', label: 'Downloads', type: 'link' },
            { id: 'logout', icon: 'log-out', label: 'Logout' },
        ],
    },
];


const Account = ({ navigation }) => {
    const [form, setForm] = useState({
        language: 'Hindi',
        language: 'English',
        darkMode: true,
        notification: true,
    });


    return (
        <SafeAreaView style={{ backgroundColor: '#181A20' }}>
            <ScrollView contentContainerStyle={styles.container}>

                <View style={styles.profile}>
                    <Image
                        alt=""
                        source={require('../image/image1.jpg',)}
                        style={styles.profileAvatar}
                    />

                    <Text style={styles.profileName}>Utkarsh Ajay Gawande</Text>

                    <Text style={styles.profileEmail}>utkarshgawande01@gmail.com</Text>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Editprofile');
                        }}>
                        <View style={styles.profileAction}>
                            <Text style={styles.profileActionText}>Edit Profile</Text>

                            <FeatherIcon color="#fff" name="edit" size={16} />
                        </View>
                    </TouchableOpacity>
                </View>

                {SECTIONS.map(({ header, items }) => (
                    <View style={styles.section} key={header}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionHeaderText}>{header}</Text>
                        </View>
                        <View style={styles.sectionBody}>
                            {items.map(({ id, label, icon, type, value }, index) => {
                                return (
                                    <View
                                        key={id}
                                        style={[
                                            styles.rowWrapper,
                                            index === 0 && { borderTopWidth: 0 },
                                        ]}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                if (id == 'language') {
                                                    Alert.alert('Maintenance', 'Module under Maintenance', [
                                                        {
                                                            text: 'ok',
                                                            style: 'ok',
                                                        }
                                                    ])
                                                } if (id == 'darkMode') {
                                                    Alert.alert('Maintenance', 'Module under Maintenance', [
                                                        {
                                                            text: 'ok',
                                                            style: 'ok',
                                                        }
                                                    ])
                                                } if (id == 'notification') {
                                                    Alert.alert('Maintenance', 'Module under Maintenance', [
                                                        {
                                                            text: 'ok',
                                                            style: 'ok',
                                                        }
                                                    ])
                                                } if (id === 'logout') {
                                                    Alert.alert('logout', 'Are you sure you want to log out?', [
                                                        {
                                                            text: 'Cancel',
                                                            style: 'cancel',
                                                        },
                                                        { text: 'YES', onPress: () => navigation.replace('Login') },
                                                        // {cancelable: false}

                                                    ])
                                                } if (id === 'contact') {
                                                    navigation.navigate('About Us');
                                                } if (id === 'bug') {
                                                    Linking.openURL('mailto:utkarshgawande01@gmail.com');
                                                } if (id === 'download') {
                                                    navigation.navigate('HtmlToPdf');
                                                }
                                            }}>
                                            <View style={styles.row}>
                                                <FeatherIcon
                                                    color="#fff"
                                                    name={icon}
                                                    style={styles.rowIcon}
                                                    size={22}
                                                />

                                                <Text style={styles.rowLabel}>{label}</Text>

                                                <View style={styles.rowSpacer} />

                                                {type === 'select' && (
                                                    <Text style={styles.rowValue}>{form[id]}</Text>
                                                )}

                                                {type === 'toggle' && (
                                                    <Switch
                                                        onChange={val => setForm({ ...form, [id]: val })}
                                                        value={form[id]}
                                                    />
                                                )}

                                                {(type === 'select' || type === 'link') && (
                                                    <FeatherIcon
                                                        color="#ababab"
                                                        name="chevron-right"
                                                        size={22}
                                                    />
                                                )}
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 24,
    },
    section: {
        paddingTop: 12,
    },
    sectionHeader: {
        paddingHorizontal: 24,
        paddingVertical: 8,
    },
    sectionHeaderText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#a7a7a7',
        textTransform: 'uppercase',
        letterSpacing: 1.2,
    },
    sectionBody: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#e3e3e3',
    },
    header: {
        paddingLeft: 24,
        paddingRight: 24,
        marginBottom: 12,
    },

    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#929292',
    },
    profile: {
        padding: 16,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#20232B',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    profileAvatar: {
        width: 90,
        height: 90,
        borderRadius: 9999,
    },
    profileName: {
        marginTop: 12,
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
    },
    profileEmail: {
        marginTop: 6,
        fontSize: 16,
        fontWeight: '400',
        color: '#848484',
    },
    profileAction: {
        marginTop: 12,
        paddingVertical: 10,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1746a2',
        borderRadius: 12,
    },
    profileActionText: {
        marginRight: 8,
        fontSize: 15,
        fontWeight: '600',
        color: '#fff',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingRight: 24,
        height: 50,
    },
    rowWrapper: {
        paddingLeft: 24,
        backgroundColor: '#20232B',
        borderTopWidth: 1,
        borderColor: '#20232B',
    },
    rowIcon: {
        marginRight: 12,
    },
    rowLabel: {
        fontSize: 17,
        fontWeight: '500',
        color: '#fff',
    },
    rowValue: {
        fontSize: 17,
        color: '#616161',
        marginRight: 4,
    },
    rowSpacer: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
});

export default Account;