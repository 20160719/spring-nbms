package com.myself.services.system.impl;

import java.util.List;
import java.util.Map;

import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.myself.persistences.entity.Tree;
import com.myself.services.AbstractSystemService;
import com.myself.services.system.IMenuService;

@Service(value = "menuServiceImpl")
public class MenuServiceImpl extends AbstractSystemService<Tree> implements
		IMenuService {

	@Override
	public Integer creates(List<Tree> list) throws DataAccessException {
		return getMenuMapper().creates(list);
	}

	@Override
	public Integer deletes(List<Tree> list) throws DataAccessException {
		return getMenuMapper().deletes(list);
	}

	@Override
	//@Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
	public Integer modifies(List<Tree> list) throws DataAccessException {
		int count = getMenuMapper().modifies(list);
		//int t = 1 / 0;
		return count;
	}

	@Override
	public Tree load(Tree obj) throws DataAccessException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Tree> queries(Tree obj) throws DataAccessException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Tree> query(Map<String, Object> map) throws DataAccessException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Tree> queryTrees() throws DataAccessException {
		return getMenuMapper().queryTrees();
	}

	@Override
	public String queryMenuSeq() throws DataAccessException {
		return querySeqByName("MENU");
	}
}
