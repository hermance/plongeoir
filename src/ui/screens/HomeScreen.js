import React, { Component } from "react"
import { Text, View, FlatList } from "react-native"
import { connect } from "react-redux"
import type TypeI18n from "../../store/i18n/I18NReducer"
import bookActions from "../../store/books/book.action-creator"
import type UserType from "../../store/types"
import type BookType from "../../store/types"
import styles from "../common/styles"
import Book from "../components/Book"

type Props = {|
  +i18n: TypeI18n,
  user: UserType,
  getBooks: () => Promise<*>,
  books: Array<BookType>
|}

class HomeScreen extends React.PureComponent<Props, void> {
  static navigatorStyle = { tabBarHidden: false, navBarHidden: true }

  constructor(props) {
    super(props)
    props.getBooks()
  }

  render() {
    const { i18n, user, books } = this.props
    return (
      <View style={styles.app}>
        <Text>{i18n.t("home.title")}</Text>
        <Text>
          {i18n.t("home.hello")} {user && user.firstname}
        </Text>
        {books && (
          <FlatList
            data={books}
            renderItem={({ item }) => <Book book={item} />}
            keyExtractor={(item, index) => item.title + index}
          />
        )}
      </View>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    i18n: state.i18n,
    user: state.users.user,
    books: state.book.books
  }
}
const mapDispatchToProps = () => (dispatch: any) => {
  return {
    getBooks: () => dispatch(bookActions.getBooks())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
