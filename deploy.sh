#!/bin/bash

ng build --prod --aot
aws s3 cp ./dist/PortifolioSecondVersion s3://pechnicki.com --recursive
