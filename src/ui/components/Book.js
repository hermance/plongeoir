import React, { Component } from "react"
import { Text, View, Image } from "react-native"
import type TypeI18n from "../../store/i18n/I18NReducer"
import type BookType from "../../store/types"
import styles from "../common/styles"

type Props = {|
  +i18n: TypeI18n,
  book: BookType
|}

class Book extends React.PureComponent<Props, void> {
  render() {
    const { book } = this.props
    return (
      <View style={styles.book}>
        <Text>{book.title}</Text>
        <Text>{book.author}</Text>
        {book.picture !== "" && (
          <Image source={{ uri: book.picture }} style={styles.picture} />
        )}
      </View>
    )
  }
}

export default Book
