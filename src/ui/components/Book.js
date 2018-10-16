import React, { Component } from "react"
import { Text, View, Image, TouchableOpacity } from "react-native"
import type TypeI18n from "../../store/i18n/I18NReducer"
import type BookType from "../../store/types"
import styles from "../common/styles"

type Props = {|
  +i18n: TypeI18n,
  book: BookType
|}

class Book extends React.PureComponent<Props, void> {
  render() {
    const { book, i18n } = this.props
    return (
      <View style={styles.book}>
        <Text>{book.title}</Text>
        <Text>{book.author}</Text>
        {book.picture !== "" && (
          <Image source={{ uri: book.picture }} style={styles.picture} />
        )}
        <TouchableOpacity
          style={styles.bookButton}
          onPress={() => alert("lend book")}
        >
          <Text style={styles.bookButtonText}> {i18n.t("book.lend")}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Book
