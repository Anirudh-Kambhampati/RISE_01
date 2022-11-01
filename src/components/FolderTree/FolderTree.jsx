import _ from "lodash";
import deepdash from "deepdash";
import React, { useState } from "react";
import Tree from "react-ui-tree";

import TreeNode from "./TreeNode";

import "react-ui-tree/dist/react-ui-tree.css";

deepdash(_);

const deleteFromTree = (newTree, id) => {
  let index = -1;
  const getNode = (a, i) => {
    if (a.id === id) {
      index = i;
      return true;
    }
    if (Array.isArray(a.children) && a.children.some(getNode)) {
      if (~index) {
        a.children.splice(index, 1);
        index = -1;
      }
      return true;
    }
  };
  [newTree].some(getNode);
};

const FolderTree = ({ treeData, handleClick }) => {
  const [tree, setTree] = useState(treeData);

  /*===============EVENT HANDLERS STARTS========================== */
  const handleRename = (id) => {
    const renameObj = _.findDeep(tree, (item) => item.id === id, {
      childrenPath: "children",
    });
    const response = prompt("Please rename", renameObj.value.module);
    // ignore empty string
    if (!response) {
      return;
    }
    renameObj.value.module = response;
    const newTree = _.mapDeep(
      tree,
      (item) =>
        item.id === id
          ? {
              ...item,
              ...renameObj.value,
            }
          : item,
      { childrenPath: "children" }
    );
    updateTree(newTree[0]);
  };

  const handleDelete = (id) => {
    deleteFromTree(tree, id);
    setTree((oldTree) => ({ ...oldTree, ...tree }));
  };

  const addItemToTree = (itemType, active) => {
    const newItem =
      itemType === "folder"
        ? {
            id: `root-${Date.now()}`,
            module: `New ${itemType}`,
            children: [],
            collapsed: false,
            grantedAccess: false,
          }
        : { id: `${Date.now()}`, leaf: true, module: `New ${itemType}`, grantedAccess: false };

    const newTree = _.mapDeep(tree, (item) => {
      const cloneItem = Object.assign({}, item);
      if (cloneItem) {
        if (cloneItem.id === active.id && cloneItem.children) {
          // folder
          cloneItem.children.push(newItem);
        }
      }
      return cloneItem;
    });
    updateTree(newTree[0]);
  };

  const updateTree = (tree) => {
    setTree((oldTree) => ({ ...oldTree, ...tree }));
  };
  /*===============EVENT HANDLERS ENDS========================== */

  const treeNodeProps = {
    addItemToTree,
    handleDelete,
    handleRename,
    handleClick,
  };

  return (
    <div>
      <Tree
        paddingLeft={20}
        tree={tree}
        onChange={updateTree}
        renderNode={(props) => <TreeNode {...props} {...treeNodeProps} />}
      />
    </div>
  );
};

export default FolderTree;
