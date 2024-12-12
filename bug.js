This error occurs when using the FlatList component in React Native and you are trying to render items that have a null or undefined value.  It commonly happens when data is fetched asynchronously and the component tries to render before the data has arrived.

```javascript
//Buggy code
<FlatList
  data={this.state.items} //items might be null or undefined initially
  renderItem={({ item }) => <Text>{item.name}</Text>}
/>
```