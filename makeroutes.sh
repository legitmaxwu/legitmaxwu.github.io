#!/bin/bash

# Declare an array of string with type
declare -a Routes=(
    build/story
    build/story/art
    build/story/photography
    build/story/friends
    build/patrick
    build/emir
    build/portfolio
)
 
# Iterate the string array using for loop
for val in ${Routes[@]}; do
   echo building $val...
   mkdir $val 
   cp build/index.html $val
done