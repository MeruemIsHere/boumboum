import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { STYLE } from '../../../services/constants/styles'
import DateTimePicker from '@react-native-community/datetimepicker'
import dayjs from 'dayjs'


export default function InputDateOfBirth() {
    const TODAY = new Date()
    const MINIMUM_DATE = new Date(TODAY.getTime())
    MINIMUM_DATE.setFullYear(MINIMUM_DATE.getFullYear() - 18)


    const [selectedDate, setSelectedDate] = useState(new Date())
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [showDatePicker, setShowDatePicker] = useState(false)

    const isValidDate = selectedDate.getTime() < MINIMUM_DATE.getTime()

    const onChangeDate = (e, newSelectedDate) => {
        console.log(e.type);
        if(e.type !== 'set') {
            setShowDatePicker(false)
            return
        }
        setShowDatePicker(false)

        setSelectedDate(newSelectedDate)

        const newDateOfBirth = dayjs(newSelectedDate).format('MM/DD/YY')
        setDateOfBirth(newDateOfBirth)

    }



    return (
        <>
            <Pressable onPress={() => setShowDatePicker(true)}>
                <Text style={[STYLE.label]}>Date of birth</Text>
                <TextInput 
                style={[STYLE.input, STYLE.p]}
                placeholder='MM/DD/YY'
                editable={false}
                value={dateOfBirth}
                />
            </Pressable>
            
            {
                showDatePicker ? (
                    <DateTimePicker 
                    mode='date'
                    display='spinner'
                    value={selectedDate}
                    onChange={onChangeDate}
                    />
                ) : null
            }
        </>
    )
}

const styles = StyleSheet.create({})