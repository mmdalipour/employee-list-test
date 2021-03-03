// components
import Button from '@material-ui/core/Button';

// providers
import { useCompareState } from 'providers/CompareProvider';

export type ClearCompareButtonProps = {};

/**
 * @component ClearCompareButton
 */
function ClearCompareButton({}: ClearCompareButtonProps) {
  const [compare, setCompare] = useCompareState();

  const handleCompareClick = () => {
    setCompare([]);
  };

  if (compare.length === 0) return null;

  return (
    <Button onClick={handleCompareClick} variant="contained" color="primary">
      Clear Compare
    </Button>
  );
}

export default ClearCompareButton;
