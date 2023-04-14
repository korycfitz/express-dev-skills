import mongoose from 'mongoose'

const Schema = mongoose.Schema

const noteSchema = new Schema({
  text: String,
  studied: Boolean
})