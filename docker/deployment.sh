#!/bin/bash

echo "==================="
echo " Travel project 🏖️ "
echo "==================="

PS3="Select an option and press Enter 👆: "
OPTIONS=("Deploy on development mode 🛠" "Delete on development mode 🗑️" "Deploy on production mode 🚀" "Delete on production mode 🗑️" "Quit 👋")

: '
OPTIONS index:
1 -> Deploy on development mode 🛠
2 -> Delete on development mode 🗑️
3 -> Deploy on production mode 🚀
4 -> Delete on production mode 🗑️
5 -> Quit 👋
'

while true; do
  echo ""
  select opt in "${OPTIONS[@]}"; do
    case $REPLY in
    "1")
      ARGS="up -d --no-recreate"
      echo ""
      echo "Deploying services...🛠"
      docker compose -f docker-compose.yml $ARGS

      ;;
    "2")
      ARGS="down"
      echo ""
      echo "Removing services...🗑️"
      docker compose -f docker-compose.yml $ARGS

      ;;
    "3")
      ARGS="up -d --no-recreate "
      echo ""
      echo "Deploying services...🚀"
      docker compose -f docker-compose.prod.yml $ARGS

      ;;
    "4")
      ARGS="down"
      echo ""
      echo "Removing services...🗑️"
      docker compose -f docker-compose.prod.yml $ARGS

      ;;
    "5")
      echo "bye 👋"
      exit 0
      ;;
    *)
      echo ""
      echo "Invalid option 🙃, please try again 👇"
      ;;
    esac
    break
  done
done
