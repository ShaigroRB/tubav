import { Button, Group, Modal, Select, NativeSelect } from '@mantine/core'
import React, { useContext, useEffect, useState } from 'react'
import { TubavContext } from '../../TubavContext'
import { LayerCategory } from '../../types'
import { useLargeScreen } from '../../useLargeScreen'
import { Equipment, EQUIPMENT_IDS } from '../../utils/equipments'
import {
  createBodyLayer,
  createEmptyLayer,
  createLayer,
} from '../../utils/layer'
import { RenderingLayersCanvas } from '../Avatar/RenderingLayersCanvas'

type Props = {
  opened: boolean
  close: () => void
  category: LayerCategory
  equipment: number
  editLayer: (category: LayerCategory, equipment: number) => void
}

/**
 * Modal to edit a layer. There is a preview of the selected element.
 */
export const LayerEditionModal: React.FC<Props> = ({
  opened,
  close,
  category,
  equipment,
  editLayer,
}) => {
  const { categoriesSelectOptions, equipmentsSelectOptions } =
    useContext(TubavContext)
  const largeScreen = useLargeScreen()

  const [newCategory, setNewCategory] = useState(category)
  const [newEquipmentId, setNewEquipmentId] = useState(equipment)

  // update if the category changes (other layer edition)
  // keep the changes if user closes modal
  // then reopen it immediately after
  useEffect(() => {
    if (newCategory !== category) {
      setNewCategory(category)
    }
    if (newEquipmentId !== equipment) {
      setNewEquipmentId(equipment)
    }
  }, [category, equipment])

  const handleUpdateCategory = (value: string) => {
    const category = value as Equipment
    // get first equipment id for new category
    const equipment_id = EQUIPMENT_IDS[category][0]
    setNewCategory(category)
    setNewEquipmentId(equipment_id)
  }

  const handleUpdateEquipmentId = (value: string) => {
    const equipment_id = parseInt(value)
    setNewEquipmentId(equipment_id)
  }

  const handleSaveModal = () => {
    editLayer(newCategory, newEquipmentId)
    close()
  }

  return (
    <Modal opened={opened} onClose={() => close()} title="Edit layer" size="md">
      {largeScreen ? (
        <>
          <Select
            label="Choose the category"
            data={categoriesSelectOptions}
            value={newCategory}
            onChange={handleUpdateCategory}
            clearable
            searchable
          />

          <Select
            my="1rem"
            label="Choose the equipment"
            data={equipmentsSelectOptions(newCategory)}
            value={newEquipmentId.toString()}
            onChange={handleUpdateEquipmentId}
            clearable
            searchable
          />
        </>
      ) : (
        <>
          <NativeSelect
            label="Choose the category"
            data={categoriesSelectOptions}
            value={newCategory}
            onChange={(e) => handleUpdateCategory(e.target.value)}
          />
          <NativeSelect
            my="1rem"
            label="Choose the equipment"
            data={equipmentsSelectOptions(newCategory)}
            value={newEquipmentId.toString()}
            onChange={(e) => handleUpdateEquipmentId(e.target.value)}
          />
        </>
      )}

      <Group>
        <PreviewModal category={newCategory} equipment={newEquipmentId} />
        <Button onClick={handleSaveModal} size="lg">
          Update layer
        </Button>
      </Group>
    </Modal>
  )
}

type PreviewModalProps = {
  category: LayerCategory
  equipment: number
}

const noop = (_: string) => {}
const bodyLayer = createBodyLayer(0)
const emptyLayer = createEmptyLayer(2)

const PreviewModal: React.FC<PreviewModalProps> = ({ category, equipment }) => {
  const layers = [bodyLayer, createLayer(category, equipment, 1), emptyLayer]

  return (
    <RenderingLayersCanvas
      aria-label="Preview of the layer to be edited"
      layers={layers}
      setAvatarDataURL={noop}
      id="preview-modal-canvas"
      zoomScale={0.42}
    />
  )
}
