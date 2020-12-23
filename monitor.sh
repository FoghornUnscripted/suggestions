#!/bin/bash
build_dir=$(pwd)
echo "building site at $build_dir"

/Users/mikestimpson/Google\ Drive\ File\ Stream/My\ Drive/Mike/Code/StaticSiteGenerator/MacBinary/StaticSiteGenerator --input "$build_dir" --output "$build_dir/docs" --watch --serve