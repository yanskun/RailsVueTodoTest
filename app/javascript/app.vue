<template>
  <div id="temp">
    <header>
      <h1>Trello()</h1>
      <nav>
      <ul>
        <li><router-link to="/">Task</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
      </nav>
    </header>
  </div>
</template>

<style>

header {
  background-color: rgba(150, 187, 142, 0.9);
  height: 100px;
  width: 100%;
}

#temp li {
  list-style: none;
}

</style>
