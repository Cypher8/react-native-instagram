import React, {useState} from 'react'
import styled from 'styled-components/native'
import {TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import SearchModal from './search-modal'

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: 50px;
`
const WrapSearchIcon = styled.View`
  flex: 0.12;
  align-items: flex-end;
  justify-content: center;
`

const WrapTextInput = styled.View`
  flex: 0.88;
  justify-content: center;
  padding-left: 5px;
`

const Search = ({onSelect}) => {
  const [search, setSearch] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <Container>
      <WrapSearchIcon>
        <Icon name={'ios-search'} size={30} />
      </WrapSearchIcon>
      <WrapTextInput>
        <TextInput
          placeholder={'Search for a user'}
          onChangeText={value => {
            setSearch(value)
            if (!modalVisible && value.trim()) {
              setModalVisible(true)
            }
          }}
          value={search}
          disableFullscreenUI={true}
          autoFocus
        />
      </WrapTextInput>
      <SearchModal
        visible={modalVisible}
        search={search}
        setSearch={setSearch}
        onCancle={() => {
          setSearch('')
          setModalVisible(false)
        }}
        onSelect={(data) => {
          setModalVisible(false)
          onSelect(data)
        }}
      />
    </Container>
  )
}

export default Search