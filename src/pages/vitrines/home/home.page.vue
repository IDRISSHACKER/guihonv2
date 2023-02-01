<template>
  <div class="fullscreen column justify-center home">
    <q-card bordered flat class="card">
      <q-card-section class="section">
        <h1 class="text-h1 title">Guihon group sarl</h1>
        <p class="text-body1 body">Bienvenus nous somme entrain d'effectuer une migration
          vers une nouvelle version  du site web</p>
        <q-btn class="btn btn-primary" icon="facebook" label="Nous contacter" unelevated />
      </q-card-section>
    </q-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({ name: 'HomePage' })
</script>
<style lang="scss">
  .home{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #f0f3f5;

    .card{
      box-shadow: none;
      padding: 40px;
      border: solid 2px #1D2424;
      border-bottom: solid 10px #1D2424;
      border-radius: 15px;

      .section{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 16px;
        .title{
          font-size: 60px;
          font-weight: 700;
          color: #1D2424;
          line-height: 30px;
        }
        .body{
          font-size: 20px;
          font-weight: 400;
          color: $grey-8;
        }
      }
    }
  }
  .btn{
    font-weight: 700;
    text-transform: capitalize;
    background: #72e58d;
    font-size: 14px;
    padding: 10px 30px;
    border-radius: 7px;
  }

  .btn-primary{
    border: solid 2px #1D2424;
    border-bottom: solid 7px #1D2424;
  }
</style>
