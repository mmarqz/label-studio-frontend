import { types } from "mobx-state-tree";

export const RectRegionExtension = types.model(
  {
    textAnnotation: types.maybeNull(types.string),
  },
).actions(self => ({

  serialize() {
    let serializedObj = {
      original_width: self.parent.naturalWidth,
      original_height: self.parent.naturalHeight,
      image_rotation: self.parent.rotation,
      value: {
        x: self.convertXToPerc(self.x),
        y: self.convertYToPerc(self.y),
        width: self.convertHDimensionToPerc(self.width),
        height: self.convertVDimensionToPerc(self.height),
        rotation: self.rotation,
      },
    };

    if (self.textAnnotation)
      serializedObj.textAnnotation = self.textAnnotation;

    return serializedObj;
  },

}));
