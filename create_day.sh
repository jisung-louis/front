#!/bin/bash

# day 폴더 생성 스크립트
# 사용법: ./create_day.sh 07
# 또는: bash create_day.sh 07

# 파라미터 확인
if [ -z "$1" ]; then
    echo "사용법: $0 <숫자>"
    echo "예시: $0 07"
    echo "예시: $0 08"
    exit 1
fi

# 파라미터로 받은 숫자
DAY_NUM=$1

# 숫자 형식 검증 (2자리 숫자인지 확인)
if ! [[ "$DAY_NUM" =~ ^[0-9]{2}$ ]]; then
    echo "오류: 2자리 숫자를 입력해주세요. (예: 07, 08, 15)"
    exit 1
fi

# 폴더 이름 생성
FOLDER_NAME="day${DAY_NUM}"

# 이미 폴더가 존재하는지 확인
if [ -d "$FOLDER_NAME" ]; then
    echo "경고: '$FOLDER_NAME' 폴더가 이미 존재합니다."
    read -p "계속하시겠습니까? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# 메인 폴더 생성
mkdir -p "$FOLDER_NAME"

# 하위 폴더 생성
mkdir -p "$FOLDER_NAME/css"
mkdir -p "$FOLDER_NAME/html"
mkdir -p "$FOLDER_NAME/img"
mkdir -p "$FOLDER_NAME/js"

echo "✅ '$FOLDER_NAME' 폴더와 하위 폴더들이 생성되었습니다!"
echo ""
echo "생성된 구조:"
echo "  $FOLDER_NAME/"
echo "    ├── css/"
echo "    ├── html/"
echo "    ├── img/"
echo "    └── js/"

